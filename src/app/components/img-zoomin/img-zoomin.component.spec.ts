import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImgZoominComponent } from './img-zoomin.component';

describe('ImgZoominComponent', () => {
  let component: ImgZoominComponent;
  let fixture: ComponentFixture<ImgZoominComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImgZoominComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImgZoominComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
