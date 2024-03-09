import { Component, OnInit } from '@angular/core';
import { RestService } from '../../services/rest.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Project } from '../../models/project';
import { LoaderService } from '../../services/loader.service';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrl: './project.component.scss',
})
export class ProjectComponent implements OnInit {
  groupId!: string;
  projectList!: Project[];
  showProjectModal: boolean = false;
  loading: boolean = true;

  constructor(
    private route: ActivatedRoute,
    private restService: RestService,
    public loader: LoaderService
  ) {}

  ngOnInit(): void {
    this.loader.setLoading(true);
    this.route.parent?.params.subscribe((params) => {
      this.groupId = params['groupId'];
      this.restService.GetAll('groups/' + this.groupId + '/projects').subscribe(
        (result) => {
          this.projectList = result as Project[];
          this.loading = false;
          this.loader.setLoading(false);
        },
        (error) => {
          console.error('Error:', error);
        }
      );
    });
  }
  showAddModal() {
    this.showProjectModal = true;
  }
  setProjectModal(showProjectModal: boolean) {
    this.showProjectModal = showProjectModal;
  }
}
