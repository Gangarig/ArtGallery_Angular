import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarGerComponent } from './navbar-ger.component';

describe('NavbarGerComponent', () => {
  let component: NavbarGerComponent;
  let fixture: ComponentFixture<NavbarGerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavbarGerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavbarGerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
