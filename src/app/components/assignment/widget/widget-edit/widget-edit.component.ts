import { Component, OnInit } from '@angular/core';
import { WidgetService } from '../../../../services/widget.service.client';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-widget-edit',
  templateUrl: './widget-edit.component.html',
  styleUrls: ['./widget-edit.component.css']
})

export class WidgetEditComponent implements OnInit {

  uid : string = "";
  wid : string = "";
  pid : string = "";
  wgid : string = "";

  current_widget : any = [];


  constructor() { }

  ngOnInit() {
  }

}
