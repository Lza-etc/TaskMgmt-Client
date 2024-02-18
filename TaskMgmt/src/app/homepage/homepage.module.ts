import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomepageComponent } from './homepage.component';
import { SigninComponent } from './signin/signin.component';
import { RegisterComponent } from './register/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, RouterOutlet } from '@angular/router';
import { routes } from '../app.routes';
import { UserService } from '../services/user.service';
import { RestService } from '../services/rest.service';

@NgModule({
  declarations: [HomepageComponent, SigninComponent, RegisterComponent],
  imports: [
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    FormsModule,
    CommonModule,
    RouterOutlet,
  ],
  providers: [UserService, RestService],
})
export class HomepageModule {}
