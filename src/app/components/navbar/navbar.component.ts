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
  navbarActive = false;
  icon = 'bi bi-list';

  toggleNavbar() {
    this.navbarActive = !this.navbarActive;
  }
  iconChange(){
    if (this.icon == "bi bi-list")
    { this.icon = "bi bi-x-lg";}
    else 
    { this.icon = "bi bi-list"}
  }

}
