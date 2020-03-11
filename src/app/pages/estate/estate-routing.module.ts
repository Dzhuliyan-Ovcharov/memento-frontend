import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EstateCreateResolver } from 'src/app/data/services/estate-create.resolver';
import { EstateListComponent } from './estate-list/estate-list.component';
import { EstateDetailsComponent } from './estate-list/estate-single/estate-details/estate-details.component';
import { EstateCreateComponent } from './estate-create/estate-create.component';

const routes: Routes = [
    {
        path: '',
        component: EstateListComponent
    },
    {
        path: ':estateId',
        component: EstateDetailsComponent
    },
    {
        path: 'create',
        component: EstateCreateComponent,
        resolve: { estateCreateData: EstateCreateResolver }
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class EstateRoutingModule { }