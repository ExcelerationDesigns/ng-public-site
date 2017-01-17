import { Component, OnInit } from '@angular/core';
import { ParallaxConfig } from './../../shared/directives/parallax/parallax.directive';

@Component({
  selector: 'app-home-page',
  styleUrls: ['./home-page.component.scss'],
  templateUrl: './home-page.component.html'
})
export class HomePageComponent implements OnInit {

  parallaxConfig: ParallaxConfig = {
    initialValue: -300,
    ratio: .5
  };

  constructor() { }

  ngOnInit() {
  }

}
