import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-dashboard-loading',
  templateUrl: './dashboard-loading.component.html'
})
export class DashboardLoadingComponent {
  @Input() condition: boolean;
}
