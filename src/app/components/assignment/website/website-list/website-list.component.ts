import { Component, OnInit } from '@angular/core';
import { WebsiteService } from '../../../../services/website.service.client';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-website-list',
  templateUrl: './website-list.component.html',
  styleUrls: ['./website-list.component.css']
})

export class WebsiteListComponent implements OnInit {

  uid : string;
  websites : any = [];
  error_message = ""
  private sub: any;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private _service: WebsiteService) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
       this.uid = params['uid']; // (+) converts string 'id' to a number

       this.reload();
    });
  }

  reload() {
    this._service.findWebsitesByUser(this.uid).subscribe(
      (sites) => { this.websites = sites },
      (err) => {
        let msg = JSON.parse(err._body)
        this.error_message = msg.message;
      }
    );
  }

}
