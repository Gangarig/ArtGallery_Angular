import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GalleryGerComponent } from './gallery-ger.component';

describe('GalleryGerComponent', () => {
  let component: GalleryGerComponent;
  let fixture: ComponentFixture<GalleryGerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GalleryGerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GalleryGerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
