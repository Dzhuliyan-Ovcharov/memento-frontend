import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from '../components/header/header.component';
import { MaterialModule } from './material.module';
import { NotFoundComponent } from '../components/not-found/not-found.component';
import { AuthService } from 'src/app/core/services/auth.service';
import { RoleService } from 'src/app/core/services/role.service';
import { EmailVerificationService } from 'src/app/core/services/email-verification.service';
import { JwtHelperService } from 'src/app/core/services/jwt-helper.service';

@NgModule({
  declarations: [
    HeaderComponent,
    NotFoundComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule
  ],
  exports: [
    HeaderComponent,
    NotFoundComponent,
    MaterialModule,
    RouterModule
  ],
  providers: [
    AuthService,
    JwtHelperService,
    RoleService,
    EmailVerificationService
  ]
})
export class SharedModule { }
