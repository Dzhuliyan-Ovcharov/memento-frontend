import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { EmailVerificationService } from 'src/app/core/services/email-verification.service';

@Injectable({
    providedIn: 'root'
})
export class EmailVerificationResolver implements Resolve<any> {

    constructor(private emailVerification: EmailVerificationService) { }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): any {
        return this.emailVerification.verifyEmail(route.queryParams.token)
    }
}