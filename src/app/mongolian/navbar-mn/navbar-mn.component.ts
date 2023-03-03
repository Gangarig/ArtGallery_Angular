import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar-mn',
  templateUrl: './navbar-mn.component.html',
  styleUrls: ['./navbar-mn.component.scss']
})
export class NavbarMNComponent implements OnInit {

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

  languageSelect = document.getElementById("language");
  redirectToPage(){
    // if (selectedLanguage === "english") {
    //   window.location.href = "english-page.html";
    // } else if (selectedLanguage === "german") {
    //   window.location.href = "german-page.html";
    // } else if (selectedLanguage === "mongolian") {
    //   window.location.href = "mongolian-page.html";
    // }
  }
}
