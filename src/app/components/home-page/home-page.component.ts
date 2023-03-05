import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  constructor() { }
  position = 0;
  intervalId: any;

  ngOnInit() {
    this.intervalId = setInterval(() => {
      this.position -= 10; // adjust the amount of pixels to move at each interval
      if (this.position < -1000) {
        this.position = 0; // adjust the container width and total image width as needed
      }
    }, 100); // adjust the interval time as needed
  }

  ngOnDestroy() {
    clearInterval(this.intervalId);
  }
}
