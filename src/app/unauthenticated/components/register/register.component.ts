import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { apiUrls } from 'src/app/shared/constants';
import { UserRegister } from 'src/app/shared/models/userRegister.model';
import { AuthService } from 'src/app/shared/services/auth.service';
import { RegisterInformativeDialogComponent } from './register-informative-dialog/register-informative-dialog.component';

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
    private activatedRoute: ActivatedRoute,
    private dialog: MatDialog
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
      permission: [selectedValue, Validators.required]
    })
  }

  register(): void {
    const userRegister: UserRegister = this.registerForm.value;
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
}
