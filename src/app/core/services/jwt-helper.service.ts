import { Injectable } from '@angular/core';
import * as jwt_decode from 'jwt-decode';

@Injectable()
export class JwtHelperService {

    constructor() { }

    getToken(): string {
        return localStorage.getItem('token');
    }

    getFirstName(): string {
        const token: any = jwt_decode(this.getToken());
        return token.firstName;
    }

    getLastName(): string {
        const token: any = jwt_decode(this.getToken());
        return token.lastName;
    }

    getEmail(): string {
        const token: any = jwt_decode(this.getToken());
        return token.sub;
    }

    isAuthenticated(): boolean {
        return this.isTokenExists(this.getToken());
    }

    isAdmin(): boolean {
        if (this.isTokenExists(this.getToken())) {
            const token: any = jwt_decode(this.getToken());
            return token.scopes === 'ADMIN';
        }

        return false;
    }

    private isTokenExists(token: string): boolean {
        return token != null;
    }
}
