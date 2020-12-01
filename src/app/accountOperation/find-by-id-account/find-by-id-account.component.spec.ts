import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FindByIdAccountComponent } from './find-by-id-account.component';

describe('FindByIdAccountComponent', () => {
  let component: FindByIdAccountComponent;
  let fixture: ComponentFixture<FindByIdAccountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FindByIdAccountComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FindByIdAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
