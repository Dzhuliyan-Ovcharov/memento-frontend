import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from '../components/header/header.component';
import { MaterialModule } from './material.module';
import { AuthService } from '../services/auth.service';
import { JwtHelperService } from '../helpers/JwtHelperService';

@NgModule({
  declarations: [
    HeaderComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule
  ],
  exports: [
    HeaderComponent,
    MaterialModule
  ],
  providers: [
    AuthService,
    JwtHelperService
  ]
})
export class SharedModule { }
