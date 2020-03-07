import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { EstatesComponent } from './estates/estates.component';
import { EstateCreateComponent } from './estate-create/estate-create.component';
import { EstateDetailsComponent } from './estates/single-estate/estate-details/estate-details.component';

const routes: Routes = [
    {
        path: '',
        component: EstatesComponent
    },
    {
        path: ':estateId',
        component: EstateDetailsComponent
    },
    {
        path: 'create',
        component: EstateCreateComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class EstateRoutingModule { }