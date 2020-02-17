import { Component, OnInit, OnChanges } from '@angular/core';
import { JwtHelperService } from 'src/app/core/services/jwt-helper.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  constructor(private jwtHelperService: JwtHelperService) { }

  isLoggedIn(): boolean {
    return this.jwtHelperService.isAuthenticated();
  }

}
