import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd, Route } from '@angular/router';

@Component({
  selector: 'app-about-ger',
  templateUrl: './about-ger.component.html',
  styleUrls: ['./about-ger.component.scss']
})
export class AboutGerComponent implements OnInit {

  constructor( private router:Router) { }

  ngOnInit() {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        window.scrollTo(0, 0);
      }
    });
  }

}
