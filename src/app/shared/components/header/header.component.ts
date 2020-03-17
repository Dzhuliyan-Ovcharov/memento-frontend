import { Component, OnInit } from '@angular/core';
import { JwtHelperService } from 'src/app/core/services/jwt-helper.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  firstName: string;
  lastName: string;

  constructor(
    private jwtHelperService: JwtHelperService,
    private router: Router) { }

  ngOnInit(): void {
    this.setCurrentUser();
  }

  isLoggedIn(): boolean {
    return this.jwtHelperService.isAuthenticated();
  }

  isAdmin(): boolean {
    return this.jwtHelperService.isAdmin();
  }

  logout(): void {
    localStorage.clear();
    this.router.navigateByUrl('/home');
  }

  private setCurrentUser(): void {
    this.firstName = this.jwtHelperService.getFirstName();
    this.lastName = this.jwtHelperService.getLastName();
  }
}
