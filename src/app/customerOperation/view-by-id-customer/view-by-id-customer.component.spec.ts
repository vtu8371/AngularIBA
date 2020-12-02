import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewByIdCustomerComponent } from './view-by-id-customer.component';

describe('ViewByIdCustomerComponent', () => {
  let component: ViewByIdCustomerComponent;
  let fixture: ComponentFixture<ViewByIdCustomerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewByIdCustomerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewByIdCustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
