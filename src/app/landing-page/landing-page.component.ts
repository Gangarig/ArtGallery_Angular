import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {

  constructor( private router :Router) { }

  ngOnInit(): void {
  }


  languageBtn = document.getElementById('languageBtn');
  options = document.getElementById('options');
  status = false;
  languageStatus = true;
  language:string = '';

  // function brings the hidden buttons and hides language btn
  showOptions() {
    this.status = true;
    this.languageStatus = false;
  }
  english(){
    this.language = 'English';
  }
  german (){
    this.language = 'German';
  }
  mongolian(){
    this.language = 'Mongolian';
  }

  //function sends you to specific page depending on language choice
  enter(){
    if(this.language == 'English'){
      this.router.navigate(['/home']);
    }
    if(this.language == 'German'){
      this.router.navigate(['']);
    }
  }
}
