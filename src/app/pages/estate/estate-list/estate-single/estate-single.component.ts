import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Estate } from 'src/app/data/models/estate.model';
import { defaultImgUrl } from 'src/app/shared/constants';

@Component({
  selector: 'app-estate-single',
  templateUrl: './estate-single.component.html',
  styleUrls: ['./estate-single.component.scss']
})
export class EstateSingleComponent implements OnInit{

  @Input()
  estate: Estate;

  @Input()
  isMine: boolean;

  defaultImgUrl: string = defaultImgUrl;
  slideConfig = {
    "slidesToShow": 1,
    "dots": true,
    "arrows": false,
    "adaptiveHeight": false,
    "slidesToScroll": 1
  };

  constructor() { }

  ngOnInit() {
   
  }
}
