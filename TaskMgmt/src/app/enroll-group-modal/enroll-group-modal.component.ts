import { Component, EventEmitter, Output } from '@angular/core';
import { EnrollDTO } from '../models/enroll-dto';
import { RestService } from '../services/rest.service';
import { GroupDTO } from '../models/group-dto';

@Component({
  selector: 'app-enroll-group-modal',
  templateUrl: './enroll-group-modal.component.html',
  styleUrl: './enroll-group-modal.component.scss',
})
export class EnrollGroupModalComponent {
  @Output() showEnrollModal = new EventEmitter<boolean>();
  enrollGroup: EnrollDTO = { groupName: '', referralCode: '' };

  constructor(private restService: RestService) {}
  openEnrollModal() {
    this.showEnrollModal.emit(true);
  }

  closeEnrollModal() {
    this.showEnrollModal.emit(false);
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
}
