import { Component, OnInit } from '@angular/core';
import { homePageAnimation } from './home.animation';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [homePageAnimation]
})
export class HomeComponent implements OnInit {
  show = true;

  constructor() { }

  ngOnInit() { }

  get stateName() {
    return this.show ? 'show' : 'hide';
  }

  consoleState() {
    console.log('começou');
  }


  consoleEnd() {
    console.log('terminou');
  }

}
