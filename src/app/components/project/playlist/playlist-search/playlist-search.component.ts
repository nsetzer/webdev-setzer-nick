import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from '../../../../services/user.service.client';
import { ProjectService } from '../../../../services/project.service.client';
import { PlaylistService } from '../../../../services/playlist.service.client';
import { Playlist } from '../../../../objects/playlist.object';

@Component({
  selector: 'app-playlist-search',
  templateUrl: './playlist-search.component.html',
  styleUrls: ['./playlist-search.component.css']
})
export class PlaylistSearchComponent implements OnInit {

  uid : string = "";
  private sub: any;

  searchTerm: string = "";
  searchResults: any[] = [];

  alertMessage: Boolean = false;
  successMessage: Boolean = false;
  searchWasRun: Boolean = false;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private _service: ProjectService,
              private _plservice: PlaylistService) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {

       if (params["uid"]) {
         this.uid = params['uid'];
       } else {
         this.uid = null;
       }

       this.reload();
    });
  }

  reload() {
    let state = this._plservice.getPreviousKeywordSearch();
    this.searchTerm = state.searchTerm;
    this.searchResults = state.results;
  }


  runSearch() {
    this._plservice.keywordSearch(this.searchTerm)
    .subscribe(
        (data: any[]) => {
            this.successMessage = true;
            this.searchResults = data;
            this.searchWasRun = true;
        }
    );
  }

  openProfile(lst) {
    if (this.uid) {
      let url = "/project/(project:user/" + this.uid + "/list/search/"+lst._id+")"
      this.router.navigateByUrl(url);
    } else {
      let url = "/project/search/user/" + lst.uid;
      this.router.navigateByUrl(url);
    }
  }

  copyPlaylist(lst) {
    if (this.uid) {
      lst.name = "Copy of " + lst.name
      this._plservice.createPlaylist(this.uid, lst)
      .subscribe(
          (new_lst) => {
              let url = "/project/(project:user/" + this.uid + "/list/"+new_lst._id+")"
              this.router.navigateByUrl(url);
          }
      );
    }
  }

  viewPlaylist(lst) {
    if (this.uid) {
      let url = "/project/(project:user/" + this.uid + "/list/search/"+lst._id+")"
      this.router.navigateByUrl(url);
    } else {
      let url = "/project/search/pl/" + lst._id;
      this.router.navigateByUrl(url);
    }
  }

}
