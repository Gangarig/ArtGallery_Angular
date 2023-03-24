import { Component, OnInit } from '@angular/core';
import { gallery } from 'src/app/galleryEn';
import { interfaceGallery } from 'src/app/interfaceGallery';
import { BehaviorSubject } from 'rxjs';
import { ImgZoominComponent } from '../img-zoomin/img-zoomin.component';
import { NgOptimizedImage } from '@angular/common';
import { Router, NavigationEnd, Route } from '@angular/router';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {

  gallery : Array<interfaceGallery> = gallery;

  constructor( private router:Router) { }
  ngOnInit() {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        window.scrollTo(0, 0);
      }
    });
  }


}
