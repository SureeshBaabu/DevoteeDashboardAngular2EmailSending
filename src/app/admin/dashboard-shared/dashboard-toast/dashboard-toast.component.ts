import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-dashboard-toast',
  templateUrl: './dashboard-toast.component.html',
  styleUrls: ['./dashboard-toast.component.css']
})
export class DashboardToastComponent {
  @Input() message = { body: '', type: '' };

  setMessage(body, type, time = 3000) {
    this.message.body = body;
    this.message.type = type;
    setTimeout(() => { this.message.body = ''; }, time);
  }
}
