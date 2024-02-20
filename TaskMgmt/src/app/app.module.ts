import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserService } from './services/user.service';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { RouterModule, RouterOutlet } from '@angular/router';
import { routes } from './app.routes';
import { RestService } from './services/rest.service';
import { JwtInterceptor } from './interceptors/jwt.interceptor';
import { GroupComponent } from './group/group.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { HomepageModule } from './homepage/homepage.module';
import { ModalComponent } from './modal/modal.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { ErrorInterceptor } from './interceptors/error.interceptor';
import { AddGroupModalComponent } from './add-group-modal/add-group-modal.component';
import { EnrollGroupModalComponent } from './enroll-group-modal/enroll-group-modal.component';
import { AddProjectModalComponent } from './add-project-modal/add-project-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    GroupComponent,
    AddGroupModalComponent,
    EnrollGroupModalComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    RouterOutlet,
    FormsModule,
    HomepageModule,
    DashboardModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    ModalComponent,
  ],
  providers: [
    UserService,
    RestService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: JwtInterceptor,
      multi: true,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ErrorInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
