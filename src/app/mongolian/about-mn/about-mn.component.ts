import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd, Route } from '@angular/router';

@Component({
  selector: 'app-about-mn',
  templateUrl: './about-mn.component.html',
  styleUrls: ['./about-mn.component.scss']
})
export class AboutMNComponent implements OnInit {

  constructor( private router:Router) { }
  ngOnInit() {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        window.scrollTo(0, 0);
      }
    });
  }


}
