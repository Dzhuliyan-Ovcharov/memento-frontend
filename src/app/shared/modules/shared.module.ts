import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from '../components/header/header.component';
import { MaterialModule } from './material.module';
import { AuthService } from '../services/auth.service';
import { JwtHelperService } from '../helpers/JwtHelperService';
import { NotFoundComponent } from '../components/not-found/not-found.component';
import { RoleService } from '../services/role.service';

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
    MaterialModule
  ],
  providers: [
    AuthService,
    JwtHelperService,
    RoleService
  ]
})
export class SharedModule { }
