import { Component, EventEmitter, Output } from '@angular/core';
import { GroupDTO } from '../models/group-dto';
import { RestService } from '../services/rest.service';

@Component({
  selector: 'app-add-group-modal',
  templateUrl: './add-group-modal.component.html',
  styleUrl: './add-group-modal.component.scss',
})
export class AddGroupModalComponent {
  @Output() showCreateModal = new EventEmitter<boolean>();
  newGroup: GroupDTO = { groupName: '' };

  constructor(private restService: RestService) {}

  closeCreateModal() {
    this.showCreateModal.emit(false);
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
}
