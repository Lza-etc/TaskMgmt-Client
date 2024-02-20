import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../services/user.service';
import { UserRegister } from '../../models/user-register';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss',
})
export class RegisterComponent {
  signupForm!: FormGroup;
  user!: UserRegister;

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.signupForm = this.formBuilder.group({
      email: [
        '',
        [
          Validators.required,
          Validators.pattern(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/),
        ],
      ],
      password: [
        '',
        [
          Validators.required,
          Validators.minLength(6),
          Validators.maxLength(20),
        ],
      ],
      name: ['', Validators.required],
      groupName: ['', Validators.required],
      referralCode: [''],
    });
  }

  public onSubmit() {
    if (this.signupForm.valid) {
      this.user = {
        email: this.signupForm.value.email,
        password: this.signupForm.value.password,
        name: this.signupForm.value.name,
        groupName: this.signupForm.value.groupName,
        referralCode: this.signupForm.value.referralCode,
      };
      this.userService.Post<UserRegister>('signup', this.user).subscribe(
        (result) => {
          console.log('Success:', result);
          localStorage.setItem('userToken', result);
          this.router.navigateByUrl('/groups');
        },
        (error) => {
          this.signupForm.reset();
        }
      );
    }
  }
}
