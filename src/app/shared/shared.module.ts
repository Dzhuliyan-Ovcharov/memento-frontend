import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';
import { RoleService } from 'src/app/core/services/role.service';
import { EmailVerificationService } from 'src/app/core/services/email-verification.service';
import { JwtHelperService } from 'src/app/core/services/jwt-helper.service';
import { HeaderComponent } from './components/header/header.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { MaterialModule } from './modules/material.module';
import { ErrorPipe } from './pipes/error.pipe';
import { FooterComponent } from './components/footer/footer.component';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { NgxSpinnerModule } from "ngx-spinner";

@NgModule({
  declarations: [
    HeaderComponent,
    NotFoundComponent,
    ErrorPipe,
    FooterComponent,
    SpinnerComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule,
    NgxSpinnerModule
  ],
  exports: [
    HeaderComponent,
    NotFoundComponent,
    MaterialModule,
    RouterModule,
    ErrorPipe,
    FooterComponent,
    NgxSpinnerModule,
    SpinnerComponent
  ],
  providers: [
    AuthService,
    JwtHelperService,
    RoleService,
    EmailVerificationService
  ]
})
export class SharedModule { }
