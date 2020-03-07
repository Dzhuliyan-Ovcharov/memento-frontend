import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SingleEstateComponent } from './estates/single-estate/single-estate.component';
import { EstateDetailsComponent } from './estates/single-estate/estate-details/estate-details.component';
import { EstateCreateComponent } from './estate-create/estate-create.component';
import { EstateRoutingModule } from './estate-routing.module';

@NgModule({
  declarations: [SingleEstateComponent, EstateDetailsComponent, EstateCreateComponent],
  imports: [
    CommonModule,
    EstateRoutingModule
  ]
})
export class EstateModule { }
