import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeGerComponent } from './home-ger.component';

describe('HomeGerComponent', () => {
  let component: HomeGerComponent;
  let fixture: ComponentFixture<HomeGerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeGerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeGerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
