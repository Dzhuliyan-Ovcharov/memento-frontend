import { Quadrature } from './quadrature.model';

export interface EstateCreate {
    price: number;
    quadrature: Quadrature;
    description: string;
    floorNumber: number;
    estateType: string ;
    adType: string;
    email: string;
}