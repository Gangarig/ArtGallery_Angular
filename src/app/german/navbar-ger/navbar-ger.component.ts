import { Component, Directive, OnInit,ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-navbar-ger',
  templateUrl: './navbar-ger.component.html',
  styleUrls: ['./navbar-ger.component.scss']
})
export class NavbarGerComponent implements OnInit {

  constructor(private router:Router) { }

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
  @ViewChild('language') languages!: ElementRef;
	selectedLanguage: string = 'german'; // default selected language
    navigateToPage() {
      if (this.selectedLanguage === 'english') {
        this.router.navigate(['/']);
      } else if (this.selectedLanguage === 'german') {
        this.router.navigate(['/homeGer']);
      } else if (this.selectedLanguage === 'mongolian') {
        this.router.navigate(['/homeMn']);
      }
    }
}
