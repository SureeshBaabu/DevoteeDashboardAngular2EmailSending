import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { DashboardLoadingComponent } from './dashboard-loading.component';

describe('LoadingComponent', () => {
  let component: DashboardLoadingComponent;
  let fixture: ComponentFixture<DashboardLoadingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardLoadingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardLoadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should not show the DOM element', () => {
    const de = fixture.debugElement.query(By.css('div'));
    expect(de).toBeNull();
  });

  it('should show the DOM element', () => {
    component.condition = true;
    fixture.detectChanges();
    expect(component).toBeTruthy();
    const de = fixture.debugElement.query(By.css('div'));
    const el = de.nativeElement;
    expect(de).toBeDefined();
    expect(el.textContent).toContain('Loading...');
  });
});
