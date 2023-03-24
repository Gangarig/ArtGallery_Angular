import { Component, Directive, OnInit,ElementRef, ViewChild } from '@angular/core';
import { Router, NavigationEnd, Route } from '@angular/router';
export class AppModule { }
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})

export class NavbarComponent implements OnInit {

  constructor(private router:Router) { }
  ngOnInit() {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        window.scrollTo(0, 0);
      }
    });
  }
  home:string = "HOME";
  about:string = "ABOUT";
  contact:string = "CONTACT";
  gallery:string = "GALLERY";

  homeLink:string ="/";
  aboutLink:string ="/about";
  galleryLink:string ="/gallery";
  contactLink:string ="/contact";
  @ViewChild('language') languages!: ElementRef;


	selectedLanguage: string = 'english'; // default selected language
    navigateToPage() {
      if (this.selectedLanguage === 'english') {
        // navbar variables
        this.home = "HOME";
        this.about = "ABOUT";
        this.contact = "CONTACT";
        this.gallery = "GALLERY";
        // navbar links
        this.homeLink ="/";
        this.aboutLink ="/about";
        this.galleryLink ="/gallery";
        this.contactLink ="/contact";
        this.router.navigate(['/']);
        if (document.getElementById('navbar')?.classList.contains('navbarMN') )
        {
          document.getElementById('navbar')?.classList.replace('navbarMN','navbar');
        }
        this.toggleNavbar();

      } else if (this.selectedLanguage === 'german') {
        this.home = "HOME";
        this.about = "ÜBER";
        this.contact = "KONTAKT";
        this.gallery = "GALERIE";

        this.homeLink ="/homeGer";
        this.aboutLink ="/aboutGer";
        this.galleryLink ="/galleryGer";
        this.contactLink ="/contactGer";
        this.router.navigate(['/homeGer']);
        if (document.getElementById('navbar')?.classList.contains('navbarMN') )
        {
          document.getElementById('navbar')?.classList.replace('navbarMN','navbar');
        }
        this.toggleNavbar();

      } else if (this.selectedLanguage === 'mongolian') {
        this.home = "НҮҮР ХУУДАС";
        this.about = "ТАНИЛЦУУЛГА";
        this.contact = "ХОЛБОО БАРИХ";
        this.gallery = "БҮТЭЭЛҮҮД";

        this.homeLink ="/homeMn";
        this.aboutLink ="/aboutMn";
        this.galleryLink ="/galleryMn";
        this.contactLink ="/contactMn";
        this.router.navigate(['/homeMn']);
        document.getElementById('navbar')?.classList.replace('navbar','navbarMN');
        this.toggleNavbar();
    }
      
  }

  // responsive navbar methods
  icon:string='bi bi-list';
  //bi bi-x-lg
  toggleNavbar(){
    document.getElementById('show')?.classList.toggle('navLinks');
  }
  iconChange(){
    if( this.icon == 'bi bi-list') {
      this.icon = 'bi bi-x-lg';
    } else {
      this.icon = 'bi bi-list';
    }
  }
}

