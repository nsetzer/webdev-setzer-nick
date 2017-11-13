import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../../services/user.service.client';
import { ProjectService } from '../../../../services/project.service.client';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-project-admin',
  templateUrl: './project-admin.component.html',
  styleUrls: ['./project-admin.component.css']
})
export class ProjectAdminComponent implements OnInit {

  private sub: any;

  uid : string = ""

  searchTerm: string = "";
  searchResults: any[] = [];
  searchWasRun: Boolean = false;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private _service: UserService,
              private _pservice: ProjectService) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
       this.uid = params['uid'];
       this.reload();
    });
  }

  reload() {

    let state = this._service.getPreviousUserSearch()
    this.searchTerm = state.searchTerm;
    //this.searchResults = state.results;
    // re run the search since the user may have been deleted
    this.runSearch()

  }

  reset() {
    this._pservice.databaseReset().subscribe(
      (res) => {
        this.router.navigateByUrl("/project/search/pl");
      },
      (err) => {

      }
    );
  }

  runSearch() {
    this._service.findUsersByName(this.searchTerm)
    .subscribe(
        (data: any[]) => {
            this.searchResults = data;
            this.searchWasRun = true;
        }
    );
  }

}
