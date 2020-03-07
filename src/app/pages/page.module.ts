import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxSpinnerModule } from "ngx-spinner";
import { SharedModule } from 'src/app/shared/modules/shared.module';
import { EstateModule } from './estate/estate.module';
import { HomeComponent } from './home/home.component';
import { EmailVerificationComponent } from './login/email-verification/email-verification.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { RegisterInformativeDialogComponent } from './register/register-informative-dialog/register-informative-dialog.component';
import { RegisterComponent } from './register/register.component';

@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    RegisterInformativeDialogComponent,
    EmailVerificationComponent,
    ProfileComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ReactiveFormsModule,
    NgxSpinnerModule
  ],
  exports: [
    LoginComponent,
    RegisterComponent,
    HomeComponent
  ]
})
export class PageModule { }
