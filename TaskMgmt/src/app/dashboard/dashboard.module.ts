import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectComponent } from './project/project.component';
import { RouterModule, RouterOutlet } from '@angular/router';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RestService } from '../services/rest.service';
import { NavbarComponent } from './navbar/navbar.component';
import { DashboardComponent } from './dashboard.component';
import { AddProjectModalComponent } from '../add-project-modal/add-project-modal.component';
import { ModalComponent } from '../modal/modal.component';
import { SpinnerComponent } from '../spinner/spinner.component';
import { LoaderService } from '../services/loader.service';
import { TasksComponent } from './tasks/tasks.component';

@NgModule({
  declarations: [
    DashboardComponent,
    NavbarComponent,
    ProjectComponent,
    AddProjectModalComponent,
    SpinnerComponent,
    TasksComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    RouterOutlet,
    RouterModule,
    ModalComponent,
  ],
  providers: [RestService, LoaderService],
})
export class DashboardModule {}
