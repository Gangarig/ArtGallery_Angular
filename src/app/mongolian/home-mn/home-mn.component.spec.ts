import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeMNComponent } from './home-mn.component';

describe('HomeMNComponent', () => {
  let component: HomeMNComponent;
  let fixture: ComponentFixture<HomeMNComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeMNComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeMNComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
