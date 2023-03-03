import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutGerComponent } from './about-ger.component';

describe('AboutGerComponent', () => {
  let component: AboutGerComponent;
  let fixture: ComponentFixture<AboutGerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutGerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutGerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
