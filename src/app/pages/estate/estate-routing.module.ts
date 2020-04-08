import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UnauthenticatedGuard } from 'src/app/core/guards/unauthenticated.guard';
import { EstateCreateResolver } from 'src/app/data/services/estate-create.resolver';
import { EstateCreateComponent } from './estate-create/estate-create.component';
import { EstateListComponent } from './estate-list/estate-list.component';
import { EstateDetailsComponent } from './estate-list/estate-single/estate-details/estate-details.component';

const routes: Routes = [
    {
        path: '',
        component: EstateListComponent,
    },
    {
        path: 'create',
        component: EstateCreateComponent,
        resolve: { estateCreateData: EstateCreateResolver },
        canActivate: [UnauthenticatedGuard]
    },
    {
        path: ':id',
        component: EstateDetailsComponent
    }

];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class EstateRoutingModule { }