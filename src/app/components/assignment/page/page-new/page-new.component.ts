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
  current_page = {name:"",title:""};
  private sub: any;
  error_message: string = ""
  invalid_name = false;

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

    if (this.current_page.name === "") {
      this.invalid_name = true
      return;
    }

    this._service.createPage(this.wid, this.current_page).subscribe(
      (res) => {
        this.router.navigate(["/user/" + this.uid + "/website/" + this.wid + "/page"]);
      },
      (err) => {
        let msg = JSON.parse(err._body)
        this.error_message = msg.message;
      }
    );
  }

}
