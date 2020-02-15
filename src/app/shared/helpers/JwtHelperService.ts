import { Injectable } from '@angular/core';
import * as jwt_decode from 'jwt-decode';

@Injectable()
export class JwtHelperService {

    constructor() { }

    getToken(): string {
        return localStorage.getItem('token');
    }

    isAuthenticated(): boolean {
        return this.getToken() !== null;
    }

    isAdmin(): boolean {
        const token: any = jwt_decode(this.getToken());
        return token['permission'] === 'ADMIN';
    }
}
