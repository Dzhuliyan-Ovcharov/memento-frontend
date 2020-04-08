import { Quadrature } from './quadrature.model';
import { EstateType } from './estate-type.model';
import { AdType } from './ad-type.model';
import { Floor } from './floor.model';

export interface EstateCreate {
    price: number;
    quadrature: Quadrature;
    description: string;
    floor: Floor;
    estateType: EstateType ;
    adType: AdType;
    email: string;
}