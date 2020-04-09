import { Component, OnInit, Input } from '@angular/core';
import { Estate } from 'src/app/data/models/estate.model';

@Component({
  selector: 'app-estate-single',
  templateUrl: './estate-single.component.html',
  styleUrls: ['./estate-single.component.scss']
})
export class EstateSingleComponent implements OnInit {

  @Input()
  estate: Estate;

  constructor() { }

  ngOnInit(): void {
  }

}
