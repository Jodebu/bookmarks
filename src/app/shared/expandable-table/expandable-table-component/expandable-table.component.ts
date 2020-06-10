import { Component, Input, Output, EventEmitter } from '@angular/core';
import { MatExpansionPanel } from '@angular/material/expansion';

@Component({
  selector: 'app-expandable-table',
  templateUrl: './expandable-table.component.html',
  styleUrls: ['./expandable-table.component.scss']
})
export class ExpandableTableComponent {

  @Input() data: any[] = [];
  @Input() groups: string[] = [];
  @Output() onDelete: EventEmitter<any> = new EventEmitter<any>();

  getGroupData(group: string): any[] {
    return this.data.filter((element: any) => element.group === group);
  }

  deleteItem(item: any, group: string, panel: MatExpansionPanel): void {
    if (this.getGroupData(group).length < 2)
      panel.close();
    this.onDelete.emit(item);
  }
}
