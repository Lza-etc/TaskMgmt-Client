import { Routes } from '@angular/router';
import { GroupComponent } from './group/group.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthGuard } from './auth.guard';
import { ProjectComponent } from './dashboard/project/project.component';
import { HomepageComponent } from './homepage/homepage.component';
import { SigninComponent } from './homepage/signin/signin.component';
import { RegisterComponent } from './homepage/register/register.component';

export const routes: Routes = [
  {
    path: '',
    component: HomepageComponent,
    children: [
      { path: 'login', component: SigninComponent },
      { path: 'register', component: RegisterComponent },
    ],
  },
  { path: 'groups', component: GroupComponent },
  {
    path: 'groups',
    component: DashboardComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: ':groupId/projects',
        component: ProjectComponent,
      },
    ],
  },
];