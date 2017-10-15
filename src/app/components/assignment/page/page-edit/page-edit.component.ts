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

    this._service.findPageById(this.pid).subscribe(
      (page) => { this.current_page = page },
      (err) => {}
    );

  }

  saveChanges() {
    this._service.updatePage(this.pid, this.current_page).subscribe(
      (res) => {
        this.router.navigate(["/user/" + this.uid + "/website/" + this.wid + "/page"]);
      },
      (err) => {
      }
    );
  }

  delete() {
    this._service.deletePage(this.pid).subscribe(
      (res) => {
        this.router.navigate(["/user/" + this.uid + "/website/" + this.wid + "/page"]);
      },
      (err) => {
      }
    );
  }
}
