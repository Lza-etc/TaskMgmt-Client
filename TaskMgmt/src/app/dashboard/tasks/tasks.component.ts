import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RestService } from '../../services/rest.service';
import { LoaderService } from '../../services/loader.service';
import { Task } from '../../models/task';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.scss',
})
export class TasksComponent implements OnInit {
  groupId!: number;
  projectId!: number;
  loading: boolean = true;
  taskList: Task[] = [];
  showTaskModal:boolean=false;
  constructor(
    private route: ActivatedRoute,
    private restService: RestService,
    public loader: LoaderService
  ) {}
  ngOnInit(): void {
    this.loader.setLoading(true);
    this.route.parent?.params.subscribe((params) => {
      this.groupId = params['groupId'];
    });
    this.route.params.subscribe((params) => {
      console.log(params);
      this.projectId = params['projectId'];
      this.restService
        .GetAll(
          'groups/' + this.groupId + '/projects/' + this.projectId + '/tasks'
        )
        .subscribe(
          (result) => {
            this.taskList = result as Task[];
            this.loading = false;
            this.loader.setLoading(false);
          },
          (error) => {
            console.error('Error:', error);
          }
        );
    });
  }
  CreateTask():void{

  }
  showAddModal() {
    this.showTaskModal = true;
  }
  setProjectModal(showProjectModal: boolean) {
    this.showTaskModal = showProjectModal;
  }
}
