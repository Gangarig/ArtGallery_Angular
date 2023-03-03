import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarMNComponent } from './navbar-mn.component';

describe('NavbarMNComponent', () => {
  let component: NavbarMNComponent;
  let fixture: ComponentFixture<NavbarMNComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavbarMNComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavbarMNComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
