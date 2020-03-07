import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { map } from 'rxjs/operators';
import { RoleService } from 'src/app/core/services/role.service';

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