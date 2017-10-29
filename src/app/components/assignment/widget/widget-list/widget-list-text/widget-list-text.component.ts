import { Component, OnInit, Input } from '@angular/core';
import { Widget } from "../../../../../objects/widget.object";
import { Router, ActivatedRoute } from '@angular/router';
import { DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-widget-list-text',
  templateUrl: './widget-list-text.component.html',
  styleUrls: ['./widget-list-text.component.css']
})
export class WidgetListTextComponent implements OnInit {

  @Input() widget: Widget;

  constructor(private sanitizer: DomSanitizer) { }

  ngOnInit() {
  }

  makeSafe(url) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
}
