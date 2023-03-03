import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImgZoominGerComponent } from './img-zoomin-ger.component';

describe('ImgZoominGerComponent', () => {
  let component: ImgZoominGerComponent;
  let fixture: ComponentFixture<ImgZoominGerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImgZoominGerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImgZoominGerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
