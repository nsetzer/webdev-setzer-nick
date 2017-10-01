import { Component, OnInit } from '@angular/core';
import { WebsiteService } from '../../../../services/website.service.client';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-website-edit',
  templateUrl: './website-edit.component.html',
  styleUrls: ['./website-edit.component.css',
              '../../../../../assets/css/style.css']
})
export class WebsiteEditComponent implements OnInit {

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
    this.current_site = this._service.findWebsiteById(this.wid)

    if (!this.current_site) {
        //this.current_site  = {name:"ERROR",description:"ERROR"}
        console.log("no site found")
        this.router.navigate(["/user/" + this.uid + "/website"]);
    }

  }

  saveChanges() {
    this._service.updateWebsite(this.wid, this.current_site);
    this.router.navigate(["/user/" + this.uid + "/website"]);
  }

  delete() {
    this._service.deleteWebsite(this.wid);
    this.router.navigate(["/user/" + this.uid + "/website"]);
  }

}
