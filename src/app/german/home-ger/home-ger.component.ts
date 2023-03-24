import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd, Route } from '@angular/router';

@Component({
  selector: 'app-home-ger',
  templateUrl: './home-ger.component.html',
  styleUrls: ['./home-ger.component.scss']
})
export class HomeGerComponent implements OnInit {


  constructor( private router:Router) { }
  ngOnInit() {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        window.scrollTo(0, 0);
      }
    });
  }

}
