import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
})
export class AppComponent {
  title = 'my-app';
  public sortType: string;

  changeSort(sortBy) {
    this.sortType = sortBy;
  }
}
