import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutMNComponent } from './about-mn.component';

describe('AboutMNComponent', () => {
  let component: AboutMNComponent;
  let fixture: ComponentFixture<AboutMNComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutMNComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutMNComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
