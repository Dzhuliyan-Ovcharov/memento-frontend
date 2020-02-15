import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { RoleService } from '../services/role.service';
import { filter, map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class RoleResolver implements Resolve<any> {

    constructor(private roleService: RoleService) { }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        return this.roleService.getRoles()
        .pipe(
            map((role: string[]) => {
                return role.map((role: string) => role)
                .filter(role => role != 'ADMIN')
            })
        );
    }
}