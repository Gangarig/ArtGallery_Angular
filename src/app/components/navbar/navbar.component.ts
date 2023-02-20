import { Component, Directive, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})

export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
    showNavLinks = false;
    showMobile = false;
    iconClass = 'bi-list';
    toggle() {
      this.showNavLinks = !this.showNavLinks;
      this.showMobile = !this.showMobile;
      if (this.iconClass === 'bi-list') {
        this.iconClass = 'bi-x-lg';
      } else {
        this.iconClass = 'bi-list';
      }
    }
}
