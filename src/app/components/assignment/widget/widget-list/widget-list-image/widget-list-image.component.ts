import { Component, OnInit, Input } from '@angular/core';
import { Widget } from "../../../../../objects/widget.object";
import { Router, ActivatedRoute } from '@angular/router';
import { DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-widget-list-image',
  templateUrl: './widget-list-image.component.html',
  styleUrls: ['./widget-list-image.component.css']
})
export class WidgetListImageComponent implements OnInit {

  @Input() widget: Widget;

  constructor(private sanitizer: DomSanitizer) { }

  ngOnInit() {
  }

  makeSafe(url) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
}
