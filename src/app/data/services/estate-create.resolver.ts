import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { FloorService } from './floor.service';
import { AdTypeService } from './ad-type.service';
import { EstateTypeService } from './estate-type.service';


@Injectable({
    providedIn: 'root'
})
export class RoleResolver implements Resolve<any> {

    constructor(
        private floorService: FloorService,
        private adTypeService: AdTypeService,
        private estateTypeService: EstateTypeService
    ) { }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        /*
        const floors$
        const adTypes$
        const estateTypes$

        return forkJoin(floors$, adTypes$, estateTypes$)
            .pipe(
                map(res => { return { floors: res[0], res[1], res[2]}})
            )
        */
    }
}
