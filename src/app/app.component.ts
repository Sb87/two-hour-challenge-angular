import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // TODO: consider switching to @angular/router
  page: 'iotd' | 'gallery' = 'iotd';
}
