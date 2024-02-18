import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GroupComponent } from '../group/group.component';
import { ProjectComponent } from './project/project.component';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, RouterOutlet } from '@angular/router';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RestService } from '../services/rest.service';
import { NavbarComponent } from './navbar/navbar.component';
import { DashboardComponent } from './dashboard.component';

@NgModule({
  declarations: [DashboardComponent, NavbarComponent, ProjectComponent],
  imports: [ReactiveFormsModule, HttpClientModule, FormsModule, RouterOutlet],
  providers: [RestService],
})
export class DashboardModule {}
