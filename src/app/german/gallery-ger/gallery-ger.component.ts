import { Component, OnInit } from '@angular/core';
import { galleryGer } from 'src/app/galleryGer';
import { interfaceGallery } from 'src/app/interfaceGallery';
@Component({
  selector: 'app-gallery-ger',
  templateUrl: './gallery-ger.component.html',
  styleUrls: ['./gallery-ger.component.scss']
})
export class GalleryGerComponent implements OnInit {
  galleryGer : Array<interfaceGallery> = galleryGer;
  constructor() { }

  ngOnInit(): void {
  }

}
