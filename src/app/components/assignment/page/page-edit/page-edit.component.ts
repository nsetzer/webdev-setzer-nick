import { Component, OnInit } from '@angular/core';
import { PageService } from '../../../../services/page.service.client';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-page-edit',
  templateUrl: './page-edit.component.html',
  styleUrls: ['./page-edit.component.css']
})

export class PageEditComponent implements OnInit {

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

    this._service.findPageById(this.pid).subscribe(
      (page) => { this.current_page = page },
      (err) => {
        let msg = JSON.parse(err._body)
        this.error_message = msg.message;
      }
    );

  }

  saveChanges() {

    if (this.current_page.name === "") {
      this.invalid_name = true
      return;
    }

    this._service.updatePage(this.pid, this.current_page).subscribe(
      (res) => {
        this.router.navigate(["/user/" + this.uid + "/website/" + this.wid + "/page"]);
      },
      (err) => {
        let msg = JSON.parse(err._body)
        this.error_message = msg.message;
      }
    );
  }

  delete() {
    this._service.deletePage(this.pid).subscribe(
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
