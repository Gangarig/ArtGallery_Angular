import { Component, OnInit } from '@angular/core';
import { interfaceGallery } from 'src/app/interfaceGallery';
import { BehaviorSubject } from 'rxjs';
import { galleryMn } from '../../galleryMn';

@Component({
  selector: 'app-gallery-mn',
  templateUrl: './gallery-mn.component.html',
  styleUrls: ['./gallery-mn.component.scss']
})
export class GalleryMNComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  gallery : Array<interfaceGallery> = galleryMn;
}
