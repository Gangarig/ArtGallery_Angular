import { Component, OnInit } from '@angular/core';
import { interfaceGallery } from 'src/app/interfaceGallery';
import { BehaviorSubject } from 'rxjs';
import { galleryMn } from '../../galleryMn';
import { Router, NavigationEnd, Route } from '@angular/router';

@Component({
  selector: 'app-gallery-mn',
  templateUrl: './gallery-mn.component.html',
  styleUrls: ['./gallery-mn.component.scss']
})
export class GalleryMNComponent implements OnInit {


  constructor( private router:Router) { }
  ngOnInit() {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        window.scrollTo(0, 0);
      }
    });
  }

  gallery : Array<interfaceGallery> = galleryMn;
}
