import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from 'src/app/core/services/user.service';
import { Estate } from 'src/app/data/models/estate.model';
import { EstateService } from 'src/app/data/services/estate.service';

@Component({
  selector: 'app-estate-list',
  templateUrl: './estate-list.component.html',
  styleUrls: ['./estate-list.component.scss']
})
export class EstateListComponent implements OnInit {

  estates$: Observable<Estate[]>;
  email: string;
  
  isMine: boolean;

  constructor(
    private estateService: EstateService,
    private userService: UserService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.userService.getCurrentUser()
      .subscribe(user => user !== null ?
        this.email = user.email : '');

    if (this.router.url === '/estates/mine') {
      this.estates$ = this.estateService.getAllByEmail(this.email);
      this.isMine = true;
    } else {
      this.estates$ = this.estateService.getAll();
      this.isMine = false;
    }

  }
}
