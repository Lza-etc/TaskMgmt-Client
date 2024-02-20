import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../services/user.service';
import { UserSignIn } from '../../models/user-sign-in';
import { EventService } from '../../services/event.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrl: './signin.component.scss',
})
export class SigninComponent {
  signinForm!: FormGroup;
  user!: UserSignIn;

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.signinForm = this.formBuilder.group({
      email: [
        '',
        [
          Validators.required,
          Validators.pattern(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/),
        ],
      ],
      password: ['', [Validators.required, Validators.minLength(8)]],
    });
  }

  public onSubmit() {
    if (this.signinForm.valid) {
      this.user = {
        email: this.signinForm.value.email,
        password: this.signinForm.value.password,
      };
      this.userService.Post<UserSignIn>('login', this.user).subscribe(
        (result) => {
          localStorage.setItem('userToken', result);
          this.router.navigateByUrl('/groups');
        },
        (error) => {
          this.signinForm.reset();
        }
      );
    }
  }
}
