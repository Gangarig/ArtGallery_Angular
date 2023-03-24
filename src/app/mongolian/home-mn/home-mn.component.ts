import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd, Route } from '@angular/router';

@Component({
  selector: 'app-home-mn',
  templateUrl: './home-mn.component.html',
  styleUrls: ['./home-mn.component.scss']
})
export class HomeMNComponent implements OnInit {

  constructor( private router:Router) { }
  ngOnInit() {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        window.scrollTo(0, 0);
      }
    });
  }

}
