import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactGerComponent } from './contact-ger.component';

describe('ContactGerComponent', () => {
  let component: ContactGerComponent;
  let fixture: ComponentFixture<ContactGerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactGerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactGerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
