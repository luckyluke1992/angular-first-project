import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'first-angular-project';

  count = 0;

  handle() {
    this.count++;
    console.log('called')
  }

}
