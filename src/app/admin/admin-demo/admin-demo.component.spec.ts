import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminDemoComponent } from './admin-demo.component';

describe('AdminDemoComponent', () => {
  let component: AdminDemoComponent;
  let fixture: ComponentFixture<AdminDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
