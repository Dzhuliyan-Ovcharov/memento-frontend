import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgxSpinnerModule } from "ngx-spinner";
import { AuthService } from 'src/app/core/services/auth.service';
import { EmailVerificationService } from 'src/app/core/services/email-verification.service';
import { JwtHelperService } from 'src/app/core/services/jwt-helper.service';
import { RoleService } from 'src/app/core/services/role.service';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { MaterialModule } from './modules/material.module';
import { ErrorPipe } from './pipes/error.pipe';
import { SortByPipe } from './pipes/sort-by.pipe';


@NgModule({
  declarations: [
    HeaderComponent,
    NotFoundComponent,
    ErrorPipe,
    SortByPipe,
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
    SortByPipe,
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
