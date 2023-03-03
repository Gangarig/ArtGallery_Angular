import { Component, OnInit } from '@angular/core';
import { gallery } from 'src/app/galleryEn';
import { interfaceGallery } from 'src/app/interfaceGallery';
import { BehaviorSubject } from 'rxjs';
import { ImgZoominComponent } from '../img-zoomin/img-zoomin.component';
@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {

  gallery : Array<interfaceGallery> = gallery;

  constructor() { }
  ngOnInit(): void {
  }

}
