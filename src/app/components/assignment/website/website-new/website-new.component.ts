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
  current_site = {name:"", description:""};
  private sub: any;
  error_message: string = ""
  invalid_name = false;

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

    this.current_site = {
        name:"New Website",
        description:"",
        };
  }

  saveChanges() {

    if (this.current_site.name === "") {
      this.invalid_name = true
      return;
    }
    this._service.createWebsite(this.uid, this.current_site).subscribe(
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
