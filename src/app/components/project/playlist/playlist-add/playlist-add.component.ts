import { Component, OnInit, ViewChildren } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { PlaylistService } from '../../../../services/playlist.service.client';
import { ProjectService } from '../../../../services/project.service.client';


@Component({
  selector: 'app-playlist-add',
  templateUrl: './playlist-add.component.html',
  styleUrls: ['./playlist-add.component.css']
})

export class PlaylistAddComponent implements OnInit {

  uid : string;
  plid : string;
  videoId : any = null;
  private sub: any;

  searchTerm: String;
  searchResults: any[] = [];

  alertMessage: Boolean = false;
  successMessage: Boolean = false;

  @ViewChildren('audioPlayer') audioPlayer;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private _service: ProjectService,
              private _plservice: PlaylistService) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
       this.uid = params['uid'];
       this.plid = params['plid'];

       if (params["videoId"]) {
         this.videoId = params['videoId'];
         this.searchTerm = "related:" + this.videoId

         this.runSearch();
       } else {
         this.videoId = null;
         let state = this._service.getPreviousKeywordSearch();
         this.searchTerm = state.searchTerm;
         this.searchResults = state.results;
       }

       this.reload();
    });
  }

  reload() {

  }

  runSearch() {
    let term = this.searchTerm.replace(/^\s+|\s+$/g, '');
    if (term.startsWith("related:")) {
        let videoId = term.replace(/related:/,'');
        // used cached search results if available
        let res = this._service.getPreviousRelatedSearch()
        if (res.searchTerm==videoId) {
          this.searchResults = res.results;
        } else {
          this._service.relatedSearch(videoId)
              .subscribe(
                  (data: any[]) => {
                      this.successMessage = true;
                      for (let x=0; x < data.length; x++) {
                        data[x].index = x;
                        data[x].state = "paused"
                      }
                      this.searchResults = data;
                  }
              );
        }
    } else {
      let res = this._service.getPreviousKeywordSearch()
      if (res.searchTerm == this.searchTerm) {
        this.searchResults = res.results;
      } else {
        this._service.keywordSearch(this.searchTerm)
          .subscribe(
            (data: any[]) => {
              this.successMessage = true;
              for (let x=0; x < data.length; x++) {
                data[x].index = x;
                data[x].state = "paused"
              }
              this.searchResults = data;
            }
          );
      }
    }
  }

  addIndexToPlaylist(index) {

    if (0 <= index && index < this.searchResults.length) {
        this._plservice.addSongToPlaylist(this.plid, this.searchResults[index]).subscribe(
          (res) => {
            this.searchResults.splice(index,1);
          },
          (err) => {console.log("error")},
        );

    }
  }

  play(index) {
    // play an indx and pause others
    for (let x=0; x < this.searchResults.length; x++) {
      let res = this.searchResults[x];
      if (res.state == "playing" && x!==index) {
        let audio = this.audioPlayer._results[x].nativeElement;
        audio.pause()
        this.searchResults[x].state="paused"
      } else if (res.state == "paused" && x===index) {
        let audio = this.audioPlayer._results[x].nativeElement;
        audio.play()
        this.searchResults[x].state="playing"
      }
    }
  }

  pause(index) {
    let audio = this.audioPlayer._results[index].nativeElement;
    audio.pause()
    this.searchResults[index].state="paused"
  }

  playPauseIndex(index) {

    let audio = this.audioPlayer._results[index].nativeElement;

    if (!audio.error) {
      if (audio.paused) {
        this.play(index);
      } else {
        audio.pause()
        this.searchResults[index].state="paused"
      }
    } else {
      console.log(audio.error);
      this.searchResults[index].state="error"
    }
  }

  viewDetails(index) {
    let url = "/project/(project:user/" + this.uid + "/list/" + this.plid
    if (this.videoId) {
      url += "/add/" + this.videoId + "/details/" + index
    } else {
      url += "/add/details/" + index
    }
    this.router.navigateByUrl(url);
  }

}
