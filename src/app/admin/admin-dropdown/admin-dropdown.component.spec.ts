import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminDropdownComponent } from './admin-dropdown.component';

describe('AdminDropdownComponent', () => {
  let component: AdminDropdownComponent;
  let fixture: ComponentFixture<AdminDropdownComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminDropdownComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
