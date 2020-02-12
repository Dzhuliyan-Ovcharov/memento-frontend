import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { LoginComponent } from '../components/login/login.component';
import { RegisterComponent } from '../components/register/register.component';
import { ReactiveFormsModule } from '@angular/forms';
import {MaterialModule} from '../../shared/modules/material.module';


@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent
  ],
    imports: [
        CommonModule,
        MaterialModule,
        ReactiveFormsModule
    ],
  exports: [
    LoginComponent,
    RegisterComponent
  ]
})
export class UnauthenticatedModule { }
