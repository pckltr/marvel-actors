import { Output, EventEmitter, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.sass'],
})
export class ButtonsComponent implements OnInit {
  public selection: string;
  @Output() sortTypeChanged = new EventEmitter<string>();

  constructor() {}

  ngOnInit(): void {
    this.selection = '';
  }

  onItemChange(id: string) {
    this.selection = id;
    this.sortTypeChanged.emit(id);
  }
}
