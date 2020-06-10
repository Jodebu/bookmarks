import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent {

  @Input() dataSource: any[] = [];
  @Output() onDelete: EventEmitter<any> = new EventEmitter<any>();

  displayedColumns: string[] = ['name', 'url', 'actions'];

  deleteItem(item: any): void {
    this.onDelete.emit(item);
  }
}
