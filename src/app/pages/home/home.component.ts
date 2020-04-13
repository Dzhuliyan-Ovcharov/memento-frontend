import { Component, OnInit, Input } from '@angular/core';
import { Estate } from 'src/app/data/models/estate.model';
import { Observable } from 'rxjs';
import { EstateService } from 'src/app/data/services/estate.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  estates$: Observable<Estate[]>;

  imagePaths: string[] = [
    'assets/images/slide-one.jpg',
    'assets/images/slide-two.jpg',
    'assets/images/slide-three.jpg'
  ];

  slideConfig = {
    "slidesToShow": 1,
    "dots": false,
    "arrows": true,
    "adaptiveHeight": false,
    "slidesToScroll": 1
  };


  constructor( private estateService: EstateService,) { }

  ngOnInit(): void {
    this.estates$ = this.estateService.getLatest(4);
  }

}
