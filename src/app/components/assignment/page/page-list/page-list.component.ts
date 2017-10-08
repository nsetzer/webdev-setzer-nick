import { Component, OnInit } from '@angular/core';
import { PageService } from '../../../../services/page.service.client';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-page-list',
  templateUrl: './page-list.component.html',
  styleUrls: ['./page-list.component.css']
})

export class PageListComponent implements OnInit {

  uid : string = "";
  wid : string = "";
  pages : any = [];
  private sub: any;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private _service: PageService) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
       this.uid = params['uid'];
       this.wid = params['wid'];

       this.reload();
    });
  }

  reload() {
    this.pages = this._service.findPagesByWebsiteId(this.wid)
  }

}
