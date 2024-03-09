import { Component, OnInit } from '@angular/core';
import { RestService } from '../services/rest.service';
import { Router } from '@angular/router';
import { Group } from '../models/group';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { GroupDTO } from '../models/group-dto';
import { EnrollDTO } from '../models/enroll-dto';

@Component({
  selector: 'app-group',
  templateUrl: './group.component.html',
  styleUrl: './group.component.scss',
})
export class GroupComponent implements OnInit {
  groupForm!: FormGroup;
  groupList!: Group[];
  selectedGroup!: number;
  showCreateModal: boolean = false;
  showEnrollModal: boolean = false;
  enrollGroup: EnrollDTO = { groupName: '', referralCode: '' };

  constructor(
    private restService: RestService,
    private formBuilder: FormBuilder,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.restService.GetAll('groups').subscribe(
      (result) => {
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
    this.router.navigateByUrl(
      `/groups/${this.groupForm.value.groupId}/projects`
    );
  }
  showAddModal() {
    this.showCreateModal = true;
  }
  setCreateModal(showCreateModal: boolean) {
    this.showCreateModal = showCreateModal;
  }
  showJoinModal() {
    this.showEnrollModal = true;
  }
  setEnrollModal(showEnrollModal: boolean) {
    this.showEnrollModal = showEnrollModal;
  }
}
