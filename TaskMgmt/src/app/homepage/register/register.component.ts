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
  invalidCredential: boolean = false;
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
      password: ['', [Validators.required, Validators.minLength(8)]],
      name: ['', Validators.required],
      groupName: ['', Validators.required],
      referralCode: [''],
    });
  }

  public onSubmit() {
    this.user = {
      email: this.signupForm.value.email,
      password: this.signupForm.value.password,
      name: this.signupForm.value.name,
      groupName: this.signupForm.value.groupName,
      referralCode: this.signupForm.value.referralCode,
    };
    console.log(this.user);
    this.userService.Post<UserRegister>('signup', this.user).subscribe(
      (result) => {
        console.log('Success:', result);
        localStorage.setItem('userToken', result);
        this.router.navigateByUrl('/groups');
      },
      (error) => {
        console.error('Error');
        this.invalidCredential = true;
        this.signupForm.reset();
      }
    );
  }
}
