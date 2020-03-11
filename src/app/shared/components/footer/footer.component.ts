import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  copyRight: string;

  constructor() { }

  ngOnInit(): void {
    this.copyRight = `© Memento ${new Date().getUTCFullYear()}`;
  }

}
