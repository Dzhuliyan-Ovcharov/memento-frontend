import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth.service';
import { UserService } from 'src/app/core/services/user.service';
import { User } from 'src/app/data/models/user.model';
import { JwtHelperService } from 'src/app/core/services/jwt-helper.service';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  user: User;

  constructor(
    private authService: AuthService,
    private userService: UserService,
    private jwtHelperService: JwtHelperService) { }

  ngOnInit(): void {
    if (this.jwtHelperService.isTokenValid()) {
      this.userService.fillCurrentUserFromToken();
    }
    
    this.userService.getCurrentUser()
      .subscribe(user => this.user = user);
  }

  isLoggedIn(): boolean {
    return this.authService.isAuthenticated();
  }

  isAdmin(): boolean {
    return this.userService.isAdmin();
  }

  logout(): void {
    this.authService.logout();
  }
}
