import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EstateCreateComponent } from './estate-create/estate-create.component';
import { EstateRoutingModule } from './estate-routing.module';
import { EstateSingleComponent } from './estate-list/estate-single/estate-single.component';
import { EstateDetailsComponent } from './estate-list/estate-single/estate-details/estate-details.component';
import { EstateListComponent } from './estate-list/estate-list.component';

@NgModule({
  declarations: [
    EstateListComponent,
    EstateSingleComponent,
    EstateDetailsComponent,
    EstateCreateComponent
  ],
  imports: [
    CommonModule,
    EstateRoutingModule
  ]
})
export class EstateModule { }
