import { Component, OnInit } from '@angular/core';
import { RestService } from '../../services/rest.service';
import { Router } from '@angular/router';
import { Group } from '../../models/group';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrl: './project.component.scss',
})
export class ProjectComponent implements OnInit {
  groupForm!: FormGroup;
  groupList!: Group[];
  selectedGroup!: number;

  constructor(
    private restService: RestService,
    private formBuilder: FormBuilder,
    private router: Router
  ) {}
  ngOnInit(): void {
    var groupId = localStorage.getItem('groupId');
    this.restService.GetAll('groups/' + groupId + '/projects').subscribe(
      (result) => {
        console.log(result);
        this.groupList = result as Group[];
      },
      (error) => {
        console.error('Error:', error);
      }
    );
    this.groupForm = this.formBuilder.group({
      groupName: ['', Validators.required],
    });
  }

  public onSubmit() {
    localStorage.getItem('groupId');
    this.router.navigateByUrl('/projects');
  }
}
