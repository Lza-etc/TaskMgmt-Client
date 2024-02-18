import { Component, OnInit } from '@angular/core';
import { RestService } from '../services/rest.service';
import { Router } from '@angular/router';
import { Group } from '../models/group';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-group',
  templateUrl: './group.component.html',
  styleUrl: './group.component.scss',
})
export class GroupComponent implements OnInit {
  groupForm!: FormGroup;
  groupList!: Group[];
  selectedGroup!: number;

  constructor(
    private restService: RestService,
    private formBuilder: FormBuilder,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.restService.GetAll('groups').subscribe(
      (result) => {
        console.log(result);
        this.groupList = result as Group[];
      },
      (error) => {
        console.error('Error:', error);
      }
    );
    this.groupForm = this.formBuilder.group({
      groupId: ['', Validators.required],
    });
  }

  public onSubmit() {
    console.log('hii');
    localStorage.setItem('groupId', this.groupForm.value.groupId);
    this.router.navigateByUrl(
      `/groups/${this.groupForm.value.groupId}/projects`
    );
  }
}
