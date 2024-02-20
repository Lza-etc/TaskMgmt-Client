import { Component, OnInit } from '@angular/core';
import { RestService } from '../../services/rest.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Project } from '../../models/project';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrl: './project.component.scss',
})
export class ProjectComponent implements OnInit {
  groupId!: string;
  projectList!: Project[];

  constructor(
    private route: ActivatedRoute,
    private restService: RestService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.groupId = params['groupId'];
      this.restService.GetAll('groups/' + this.groupId + '/projects').subscribe(
        (result) => {
          this.projectList = result as Project[];
        },
        (error) => {
          console.error('Error:', error);
        }
      );
    });
  }
}
