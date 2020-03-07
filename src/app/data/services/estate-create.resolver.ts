import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { forkJoin, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AdType } from '../models/ad-type.model';
import { EstateType } from '../models/estate-type.model';
import { Floor } from '../models/floor.model';
import { AdTypeService } from './ad-type.service';
import { EstateTypeService } from './estate-type.service';
import { FloorService } from './floor.service';


@Injectable({
    providedIn: 'root'
})
export class EstateCreateResolver implements Resolve<any> {

    constructor(
        private floorService: FloorService,
        private adTypeService: AdTypeService,
        private estateTypeService: EstateTypeService
    ) { }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        const floors$: Observable<Floor[]> = this.floorService.getAll();
        const adTypes$: Observable<AdType[]> = this.adTypeService.getAll();
        const estateTypes$: Observable<EstateType[]> = this.estateTypeService.getAll();

        return forkJoin(floors$, adTypes$, estateTypes$)
            .pipe(
                map(data => {
                    return {
                        floors: data[0],
                        adTypes: data[1],
                        estateTypes: data[2]
                    }
                })
            );
    }
}
