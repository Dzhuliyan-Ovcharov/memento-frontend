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
import { FileUploadComponent } from './components/file-upload/file-upload.component';
import { FileUploadModule } from 'ng2-file-upload';
import { SnackBarHelperService } from '../core/services/snack-bar-helper.service';
import 'hammerjs';
import { DialogDeleteComponent } from './components/dialog/dialog-delete/dialog-delete.component';

@NgModule({
  declarations: [
    HeaderComponent,
    NotFoundComponent,
    ErrorPipe,
    SortByPipe,
    FooterComponent,
    SpinnerComponent,
    FileUploadComponent,
    DialogDeleteComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule,
    NgxSpinnerModule,
    FileUploadModule
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
    SpinnerComponent,
    FileUploadComponent
  ],
  providers: [
    AuthService,
    JwtHelperService,
    RoleService,
    EmailVerificationService,
    SnackBarHelperService
  ]
})
export class SharedModule { }
