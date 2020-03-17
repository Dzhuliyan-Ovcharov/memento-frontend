import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { JwtHelperService } from 'src/app/core/services/jwt-helper.service';
import { UserService } from 'src/app/core/services/user.service';
import { UserProfile } from 'src/app/data/models/user-profile.model';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  userProfile$: Observable<UserProfile>;

  constructor(
    private userService: UserService,
    private jwtHelperService: JwtHelperService
  ) {
  }

  ngOnInit(): void {
    this.userProfile$ = this.userService.getUserProfileByEmail(this.jwtHelperService.getEmail());
  }
}