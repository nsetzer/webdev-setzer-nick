import { Component, OnInit } from '@angular/core';
import { WebsiteService } from '../../../../services/website.service.client';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-website-new',
  templateUrl: './website-new.component.html',
  styleUrls: ['./website-new.component.css']
})
export class WebsiteNewComponent implements OnInit {

  uid : string;
  wid : string;
  websites : any = [];
  current_site : any;
  private sub: any;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private _service: WebsiteService) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
       this.uid = params['uid'];
       this.wid = params['wid'];

       this.reload();
    });
  }

  reload() {
    this.websites = this._service.findWebsitesByUser(this.uid)
    this.current_site = {
        name:"New Website",
        description:"",
        };

  }

  saveChanges() {
    this._service.createWebsite(this.uid, this.current_site);
    this.router.navigate(["/user/" + this.uid + "/website"]);
  }
}
