import { Component, OnInit, Input } from '@angular/core';
import { Estate } from 'src/app/data/models/estate.model';
import { defaultImgUrl } from 'src/app/shared/constants';

@Component({
  selector: 'app-latest-ads',
  templateUrl: './latest-ads.component.html',
  styleUrls: ['./latest-ads.component.scss']
})
export class LatestAdsComponent implements OnInit {

  @Input()
  estate: Estate;
  
  defaultImgUrl: string = defaultImgUrl;
  
  constructor() { }

  ngOnInit(): void {
  }

}
