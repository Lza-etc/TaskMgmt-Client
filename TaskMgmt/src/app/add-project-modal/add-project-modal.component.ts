import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { RestService } from '../services/rest.service';
import { ProjectDTO } from '../models/project-dto';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-add-project-modal',
  templateUrl: './add-project-modal.component.html',
  styleUrl: './add-project-modal.component.scss',
})
export class AddProjectModalComponent implements OnInit {
  @Output() showCreateModal = new EventEmitter<boolean>();
  newProject: ProjectDTO = { projectName: '', projectDescription: '' };
  groupId!: number;

  constructor(
    private restService: RestService,
    private route: ActivatedRoute
  ) {}
  ngOnInit(): void {
    this.route.parent?.params.subscribe((params) => {
      this.groupId = params['groupId'];
    });
  }

  closeCreateModal() {
    this.showCreateModal.emit(false);
  }
  createGroup() {
    this.restService
      .Post<ProjectDTO>(`groups/${this.groupId}/projects`, this.newProject)
      .subscribe(
        (result) => {
          window.location.reload();
        },
        (error) => console.log(error)
      );
    this.closeCreateModal();
  }
}
