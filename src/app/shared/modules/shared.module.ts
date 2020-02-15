import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../components/header/header.component';
import { MaterialModule } from './material.module';
import { AuthService } from '../services/auth.service';
import { JwtHelperService } from '../helpers/JwtHelperService';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    HeaderComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    HeaderComponent,
    MaterialModule,
    RouterModule
  ],
  providers: [
    AuthService,
    JwtHelperService
  ] 
})
export class SharedModule { }
