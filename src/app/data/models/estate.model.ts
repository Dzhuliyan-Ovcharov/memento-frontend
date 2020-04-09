import { Quadrature } from './quadrature.model';
import { Price } from './price.model';

export interface Estate {
    id?: number,
    price: Price;
    quadrature: Quadrature;
    description: string;
    floor: number;
    estateType: string;
    features: string[];
    adType: string;
    email?: string;
}
