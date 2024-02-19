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
  newGroup: GroupDTO = { groupName: '' };
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

  openCreateModal() {
    this.showCreateModal = true;
  }
  openEnrollModal() {
    this.showEnrollModal = true;
  }
  closeEnrollModal() {
    this.showEnrollModal = false;
  }
  closeCreateModal() {
    this.showCreateModal = false;
  }

  createGroup() {
    this.restService.Post<GroupDTO>('groups', this.newGroup).subscribe(
      (result) => {
        window.location.reload();
      },
      (error) => console.log(error)
    );
    this.closeCreateModal();
  }

  EnrollToGroup() {
    this.restService
      .Post<EnrollDTO>('groups/enrollments', this.enrollGroup)
      .subscribe(
        (result) => {
          window.location.reload();
        },
        (error) => console.log(error)
      );
    this.closeEnrollModal();
  }
  public onSubmit() {
    localStorage.setItem('groupId', this.groupForm.value.groupId);
    this.router.navigateByUrl(
      `/groups/${this.groupForm.value.groupId}/projects`
    );
  }
}
