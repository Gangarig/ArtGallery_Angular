import { Component, OnInit } from '@angular/core';
import { GalleryComponent } from '../gallery/gallery.component';
import { gallery } from 'src/app/galleryEn';
import { interfaceGallery } from 'src/app/interfaceGallery';
import { ActivatedRoute, Params } from '@angular/router';
import { Router, NavigationEnd, Route } from '@angular/router';
@Component({
  selector: 'app-img-zoomin',
  templateUrl: './img-zoomin.component.html',
  styleUrls: ['./img-zoomin.component.scss']
})
export class ImgZoominComponent implements OnInit {
  img:interfaceGallery = {} as interfaceGallery;
  i = 0;

  constructor(private route:ActivatedRoute,
    private router:Router) {
    this.route.params.subscribe((params:Params) => {
      this.i = Number(params["i"]);
      this.img = gallery[this.i];
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
