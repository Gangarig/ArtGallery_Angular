import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterMNComponent } from './footer-mn.component';

describe('FooterMNComponent', () => {
  let component: FooterMNComponent;
  let fixture: ComponentFixture<FooterMNComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FooterMNComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FooterMNComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
