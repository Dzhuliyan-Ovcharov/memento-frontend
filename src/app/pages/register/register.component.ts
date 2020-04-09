import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/core/services/auth.service';
import { UserRegister } from 'src/app/data/models/user-register.model';
import { RegisterInformativeDialogComponent } from './register-informative-dialog/register-informative-dialog.component';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit, OnDestroy {

  hidePassword: boolean = true;
  hideConfirmPassword: boolean = true;
  stepOneRegisterForm: FormGroup;
  stepTwoRegisterForm: FormGroup;
  subscription: Subscription;
  roles: string[];

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {

    this.stepOneRegisterForm = this.fb.group({
      firstName: ['', Validators.compose([Validators.required, Validators.minLength(3)])],
      lastName: ['', Validators.compose([Validators.required, Validators.minLength(3)])],
      email: ['', Validators.compose([Validators.email, Validators.required])],
      phoneNumber: ['', Validators.compose([Validators.required, Validators.pattern(/^(\+)?(359|0)8[789]\d{1}(|-| )\d{3}(|-| )\d{3}/)])]
    });

    this.stepTwoRegisterForm = this.fb.group({
      agencyPhoneNumber: ['', Validators.compose([Validators.required, Validators.pattern(/^(\+)?(359|0)8[789]\d{1}(|-| )\d{3}(|-| )\d{3}/)])],
      agencyName: ['', Validators.compose([Validators.required, Validators.minLength(3)])],
      password: ['', Validators.compose([Validators.required, Validators.minLength(8), Validators.maxLength(20)])],
      confirmPassword: ['', Validators.compose([Validators.required, Validators.minLength(8), Validators.maxLength(20)])]
    });
  }

  register(): void {

    const userRegister: UserRegister = this.getUserRegister();

    this.subscription = this.authService.register(userRegister)
      .subscribe(() => {
        const dialogRef = this.dialog.open(RegisterInformativeDialogComponent, {
          data: {
            email: userRegister.email
          }
        })

        dialogRef.afterClosed().subscribe(() => this.router.navigateByUrl('/login'))
      });
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  private getUserRegister(): UserRegister {
    let userRegister: UserRegister = {
      firstName: this.stepOneRegisterForm.value.firstName,
      lastName: this.stepOneRegisterForm.value.lastName,
      email: this.stepOneRegisterForm.value.email,
      phoneNumber: this.stepOneRegisterForm.value.phoneNumber,
      agencyName: this.stepTwoRegisterForm.value.agencyName,
      agencyPhoneNumber: this.stepTwoRegisterForm.value.agencyPhoneNumber,
      password: this.stepTwoRegisterForm.value.password,
      confirmPassword: this.stepTwoRegisterForm.value.confirmPassword,
      permission: 'AGENCY'
    };

    return userRegister;
  }
}
