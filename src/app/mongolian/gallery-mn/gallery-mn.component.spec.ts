import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GalleryMNComponent } from './gallery-mn.component';

describe('GalleryMNComponent', () => {
  let component: GalleryMNComponent;
  let fixture: ComponentFixture<GalleryMNComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GalleryMNComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GalleryMNComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
