import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SellerToBankComponent } from './seller-to-bank.component';

describe('SellerToBankComponent', () => {
  let component: SellerToBankComponent;
  let fixture: ComponentFixture<SellerToBankComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SellerToBankComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SellerToBankComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
