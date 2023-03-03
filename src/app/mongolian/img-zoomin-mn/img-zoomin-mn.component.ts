import { Component, OnInit } from '@angular/core';
import { interfaceGallery } from 'src/app/interfaceGallery';
import { galleryMn } from 'src/app/galleryMn';
import { ActivatedRoute, Params } from '@angular/router';
@Component({
  selector: 'app-img-zoomin-mn',
  templateUrl: './img-zoomin-mn.component.html',
  styleUrls: ['./img-zoomin-mn.component.scss']
})
export class ImgZoominMNComponent implements OnInit {
  img:interfaceGallery = {} as interfaceGallery;
  i = 0;

  constructor(private route:ActivatedRoute) {
    this.route.params.subscribe((params:Params) => {
      this.i = Number(params["i"]);
      this.img = galleryMn[this.i];
    })
  }

  ngOnInit(): void {
  }

}
