import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterGerComponent } from './footer-ger.component';

describe('FooterGerComponent', () => {
  let component: FooterGerComponent;
  let fixture: ComponentFixture<FooterGerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FooterGerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FooterGerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
