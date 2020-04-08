import { Injectable } from '@angular/core';
import * as jwt_decode from 'jwt-decode';

@Injectable()
export class JwtHelperService {

    constructor() { }

    getToken(): string {
        return localStorage.getItem('token');
    }

    setToken(token: string): void {
        localStorage.setItem('token', token);
    }

    clearToken(): void {
        localStorage.clear();
    }

    getDataFromToken(value: string): any {
        const token: any = jwt_decode(this.getToken());
        return token[value];
    }

    isTokenValid(): boolean {
        const token: any = this.getToken();
        if (token == null) {
            return false;
        }

        const date = this.getTokenExpirationDate();
        return date.valueOf() > new Date().valueOf();
    }

    private getTokenExpirationDate(): Date {
        const exp = this.getDataFromToken('exp')
    
        if (exp === undefined) return null;
    
        const date = new Date(0); 
        date.setUTCSeconds(exp);
        return date;
      }
}
