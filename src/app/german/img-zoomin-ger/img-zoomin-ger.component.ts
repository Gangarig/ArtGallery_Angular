import { Component, OnInit } from '@angular/core';
import { GalleryGerComponent } from '../gallery-ger/gallery-ger.component';
import { interfaceGallery } from 'src/app/interfaceGallery';
import { ActivatedRoute, Params } from '@angular/router';
import { galleryGer } from 'src/app/galleryGer';
import { Router, NavigationEnd, Route } from '@angular/router';

@Component({
  selector: 'app-img-zoomin-ger',
  templateUrl: './img-zoomin-ger.component.html',
  styleUrls: ['./img-zoomin-ger.component.scss']
})
export class ImgZoominGerComponent implements OnInit {
  img:interfaceGallery = {} as interfaceGallery;
  i = 0;
  constructor(private route:ActivatedRoute
    ,private router:Router) {
    this.route.params.subscribe((params:Params) => {
      this.i = Number(params["i"]);
      this.img = galleryGer[this.i];
    })
  }
  ngOnInit() {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        window.scrollTo(0, 0);
      }
    });
  }


}
