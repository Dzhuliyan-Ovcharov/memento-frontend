import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EstateCreateComponent } from './estate-create/estate-create.component';
import { EstateListComponent } from './estate-list/estate-list.component';
import { EstateDetailsComponent } from './estate-list/estate-single/estate-details/estate-details.component';
import { EstateSingleComponent } from './estate-list/estate-single/estate-single.component';
import { EstateRoutingModule } from './estate-routing.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import { SlickCarouselModule } from 'ngx-slick-carousel';

@NgModule({
  declarations: [
    EstateListComponent,
    EstateSingleComponent,
    EstateDetailsComponent,
    EstateCreateComponent
  ],
  imports: [
    CommonModule,
    EstateRoutingModule,
    ReactiveFormsModule,
    SharedModule,
    FormsModule,
    SlickCarouselModule
  ]
})
export class EstateModule { }
