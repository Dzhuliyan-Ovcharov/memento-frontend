import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './shared/components/not-found/not-found.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { EmailVerificationComponent } from './pages/login/email-verification/email-verification.component';
import { EmailVerificationResolver } from './data/services/email.verification.resolver';
import { RoleResolver } from './data/services/role.resolver';
import { ProfileComponent } from './pages/profile/profile.component';
import { AuthenticatedGuard } from './core/guards/authenticated.guard';
import { UnauthenticatedGuard } from './core/guards/unauthenticated.guard';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [AuthenticatedGuard]
  },
  {
    path: 'email-verification',
    component: EmailVerificationComponent,
    resolve: { isVerified: EmailVerificationResolver }
  },
  {
    path: 'register',
    component: RegisterComponent,
    resolve: { roles: RoleResolver },
    canActivate: [AuthenticatedGuard]
  },
  {
    path: 'profile',
    component: ProfileComponent,
    canActivate: [UnauthenticatedGuard]
  },
  {
    path: 'estates',
    loadChildren: () => import('./pages/estate/estate.module').then(m => m.EstateModule)
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
