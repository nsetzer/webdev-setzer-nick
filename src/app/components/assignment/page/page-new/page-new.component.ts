import { Component, OnInit } from '@angular/core';
import { PageService } from '../../../../services/page.service.client';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-page-new',
  templateUrl: './page-new.component.html',
  styleUrls: ['./page-new.component.css']
})

export class PageNewComponent implements OnInit {

  uid : string = "";
  wid : string = "";
  pid : string = "";
  current_page : any;
  private sub: any;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private _service: PageService) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
       this.uid = params['uid'];
       this.wid = params['wid'];
       this.pid = params['pid'];

       this.reload();
    });
  }

  reload() {

    this.current_page = {
        name: "New Page",
        title: "New Page"
    }

  }

  saveChanges() {
    this._service.createPage(this.wid, this.current_page);
    this.router.navigate(["/user/" + this.uid + "/website/" + this.wid + "/page"]);
  }

}
