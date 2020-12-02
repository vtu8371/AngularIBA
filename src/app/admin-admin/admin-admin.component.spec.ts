import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAdminComponent } from './admin-admin.component';

describe('AdminAdminComponent', () => {
  let component: AdminAdminComponent;
  let fixture: ComponentFixture<AdminAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
