import { Component, OnInit, Input } from '@angular/core';
import { Widget } from "../../../../../objects/widget.object";

@Component({
  selector: 'app-widget-list-html',
  templateUrl: './widget-list-html.component.html',
  styleUrls: ['./widget-list-html.component.css']
})
export class WidgetListHtmlComponent implements OnInit {

  @Input() widget: Widget;

  constructor() { }

  ngOnInit() {
  }

}
