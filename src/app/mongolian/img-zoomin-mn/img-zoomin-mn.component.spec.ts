import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImgZoominMNComponent } from './img-zoomin-mn.component';

describe('ImgZoominMNComponent', () => {
  let component: ImgZoominMNComponent;
  let fixture: ComponentFixture<ImgZoominMNComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImgZoominMNComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImgZoominMNComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
