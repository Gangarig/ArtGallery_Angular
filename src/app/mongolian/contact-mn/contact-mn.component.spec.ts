import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactMNComponent } from './contact-mn.component';

describe('ContactMNComponent', () => {
  let component: ContactMNComponent;
  let fixture: ComponentFixture<ContactMNComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactMNComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactMNComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
