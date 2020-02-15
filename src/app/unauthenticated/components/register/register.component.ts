import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { apiUrls } from 'src/app/shared/constants';
import { UserRegister } from 'src/app/shared/models/userRegister.model';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit, OnDestroy {

  hidePassword: boolean = true;
  hideConfirmPassword: boolean = true;
  registerForm: FormGroup;
  subscription: Subscription;
  roles: string[];

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.roles = this.activatedRoute.snapshot.data.roles;
    const selectedValue: string = this.roles[0];

    this.registerForm = this.fb.group({
      firstName: ['', Validators.compose([Validators.required, Validators.minLength(3)])],
      lastName: ['', Validators.compose([Validators.required, Validators.minLength(3)])],
      email: ['', Validators.compose([Validators.email, Validators.required])],
      password: ['', Validators.compose([Validators.required, Validators.minLength(8), Validators.maxLength(20)])],
      confirmPassword: ['', Validators.compose([Validators.required, Validators.minLength(8), Validators.maxLength(20)])],
      roleName: [selectedValue, Validators.required]
    })
  }

  register(): void {
    const userRegister: UserRegister = this.registerForm.value;
    this.subscription = this.authService.register(userRegister)
      .subscribe(() => {

        this.router.navigateByUrl(apiUrls.login);
      });
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
