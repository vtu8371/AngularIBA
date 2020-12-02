import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewByIdAdminComponent } from './view-by-id-admin.component';

describe('ViewByIdAdminComponent', () => {
  let component: ViewByIdAdminComponent;
  let fixture: ComponentFixture<ViewByIdAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewByIdAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewByIdAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
