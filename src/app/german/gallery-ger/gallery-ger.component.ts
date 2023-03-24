import { Component, OnInit } from '@angular/core';
import { galleryGer } from 'src/app/galleryGer';
import { interfaceGallery } from 'src/app/interfaceGallery';
import { Router, NavigationEnd, Route } from '@angular/router';

@Component({
  selector: 'app-gallery-ger',
  templateUrl: './gallery-ger.component.html',
  styleUrls: ['./gallery-ger.component.scss']
})
export class GalleryGerComponent implements OnInit {
  galleryGer : Array<interfaceGallery> = galleryGer;

  constructor( private router:Router) { }
  ngOnInit() {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        window.scrollTo(0, 0);
      }
    });
  }


}
