import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmationDeleteContactComponent } from './confirmation-delete-contact.component';

describe('ConfirmationDeleteContactComponent', () => {
  let component: ConfirmationDeleteContactComponent;
  let fixture: ComponentFixture<ConfirmationDeleteContactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfirmationDeleteContactComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmationDeleteContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
