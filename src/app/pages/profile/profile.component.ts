import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { UserService } from 'src/app/core/services/user.service';
import { UserProfile } from 'src/app/data/models/user-profile.model';
import { User } from 'src/app/data/models/user.model';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  private user: User;
  userProfile$: Observable<UserProfile>;

  constructor(
    private userService: UserService
  ) { }

  ngOnInit(): void {
    this.userService.getCurrentUser()
      .subscribe(user => this.user = user);
    this.userProfile$ = this.userService.getUserProfileByEmail(this.user.email);
  }
}