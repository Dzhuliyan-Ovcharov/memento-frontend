import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  imagePaths: string[] = [
    'assets/images/slide-one.jpg',
    'assets/images/slide-two.jpg',
    'assets/images/slide-three.jpg'
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
