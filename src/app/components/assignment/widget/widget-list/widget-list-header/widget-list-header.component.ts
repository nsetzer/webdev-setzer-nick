import { Component, OnInit, Input } from '@angular/core';
import { Widget } from "../../../../../objects/widget.object";

@Component({
  selector: 'app-widget-list-header',
  templateUrl: './widget-list-header.component.html',
  styleUrls: ['./widget-list-header.component.css']
})
export class WidgetListHeaderComponent implements OnInit {

  @Input() widget: Widget;

  constructor() { }

  ngOnInit() {
  }

}
