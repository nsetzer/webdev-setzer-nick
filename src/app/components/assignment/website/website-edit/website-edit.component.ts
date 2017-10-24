import { Component, OnInit } from '@angular/core';
import { WebsiteService } from '../../../../services/website.service.client';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-website-edit',
  templateUrl: './website-edit.component.html',
  styleUrls: ['./website-edit.component.css']
})
export class WebsiteEditComponent implements OnInit {

  uid : string;
  wid : string;
  websites : any = [];
  current_site = {name:"", description:""};
  private sub: any;
  error_message: string = ""

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
    this._service.findWebsitesByUser(this.uid).subscribe(
      (sites) => { this.websites = sites},
      (err) => {
        let msg = JSON.parse(err._body)
        this.error_message = msg.message;
      }
    );

    this._service.findWebsiteById(this.wid).subscribe(
      (site) => {
        this.current_site = site
        if (!this.current_site) {
          //this.current_site  = {name:"ERROR",description:"ERROR"}
          this.router.navigate(["/user/" + this.uid + "/website"]);
        }
      },
      (err) => {
        let msg = JSON.parse(err._body)
        this.error_message = msg.message;
      }
    );

  }

  saveChanges() {

    this._service.updateWebsite(this.wid, this.current_site).subscribe(
      (res) => {
        this.router.navigate(["/user/" + this.uid + "/website"]);
      },
      (err) => {
        let msg = JSON.parse(err._body)
        this.error_message = msg.message;
      }
    );

  }

  delete() {
    this._service.deleteWebsite(this.wid).subscribe(
      (res) => {
        this.router.navigate(["/user/" + this.uid + "/website"]);
      },
      (err) => {
        let msg = JSON.parse(err._body)
        this.error_message = msg.message;
      }
    );

  }

}
