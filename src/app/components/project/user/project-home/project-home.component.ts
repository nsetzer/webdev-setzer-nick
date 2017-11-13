import { Component, ViewChild, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { UserService } from '../../../../services/user.service.client';
import { QueueService } from '../../../../services/queue.service.client';


@Component({
  selector: 'app-project-home',
  templateUrl: './project-home.component.html',
  styleUrls: ['./project-home.component.css']
})
export class ProjectHomeComponent implements OnInit {

  /*
  https://stackoverflow.com/questions/42771786/how-to-pass-data-from-child-to-parent-angular2

  inject/call parent component methods
  https://stackoverflow.com/questions/35940984/angular2-call-function-of-parent-component

  */
  uid : string;
  @ViewChild('audioPlayer') audioPlayer;

  current_song = {length:0, url:"", title:""}
  song_load_error = false;
  private sub: any;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private _service: UserService,
              private _qservice: QueueService) {
    _qservice.queueChangedEvent.subscribe(res => {
      this.onQueueChanged();


    });


  }

  ngOnInit() {
    var aud = this.audioPlayer.nativeElement;
    aud.onended = () => { this.onPlaybackEnd() }
    console.log(aud)

    // redirect the user to the real home page when
    // an invalid path is given
    if (!this.route.snapshot.firstChild ||
        !this.route.snapshot.firstChild.url[1].path) {
      let url = "/project/search/pl";
      this.router.navigateByUrl(url);
    }

    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        // this._activatedRoute.snapshot is up to date
        if (this.route.snapshot.firstChild) {
          var uid = this.route.snapshot.firstChild.url[1].path;
          if (uid) {
            this.onRouteChanged(uid);
          } else {
            let url = "/project/search/pl";
            this.router.navigateByUrl(url);
          }
        }
      }
    });

    this.reload()

  }

  reload() {
    if (this.route.snapshot.firstChild) {
      let uid = this.route.snapshot.firstChild.url[1].path;
      if (uid) {
        this.uid = uid
        this.loadCurrentSong(0);
      } else {
        this.uid = null
      }
    }
  }

  onRouteChanged(uid) {
    console.log("route changed " + uid)
  }

  openSongQueue() {
    if (this.route.snapshot.firstChild) {
      let uid = this.route.snapshot.firstChild.url[1].path;
      if (uid) {
        let url = "/project/(project:user/" + uid + "/queue)"
        this.router.navigateByUrl(url);
      }
    }
  }

  openProfileHome() {

    if (this.route.snapshot.firstChild) {
      let uid = this.route.snapshot.firstChild.url[1].path;
      if (uid) {
        let url = "/project/(project:user/" + uid + ")"
        this.router.navigateByUrl(url);
      }
    }
  }

  onQueueChanged() {
    if (this.route.snapshot.firstChild) {
      let uid = this.route.snapshot.firstChild.url[1].path;
      if (uid) {
        this.loadCurrentSong();
      }
    }
  }

  playPauseClicked() {

    var aud = this.audioPlayer.nativeElement;

    console.log(aud.error)
    if (!aud.error) {
      if (aud.paused) {
        aud.play()
        console.log("play")
      } else {
        aud.pause()
        console.log("pause")
      }
    } else {
      let code = aud.error.code
      let message = aud.error.message
      console.error(`Media error (${code}): ${message}`);
    }

  }

  loadCurrentSong(autoplay=1){
    if (!this.route.snapshot.firstChild) {
      return;
    }
    let uid = this.route.snapshot.firstChild.url[1].path;
    var aud = this.audioPlayer.nativeElement;

    if (uid) {
      this._qservice.currentSong(uid).subscribe(
          (song) => {
            this.song_load_error = false
            this.current_song = song
            console.log("current song" + JSON.stringify(song));
            aud.src = song.url
            if (autoplay) {
              aud.play();
            }
          },
          (err) => {
            console.log("error loading current song")
            this.song_load_error = true;
            this.current_song = {length:0, url:"", title:""}
          }
        );
    }
  }

  loadNextSong(){
    if (!this.route.snapshot.firstChild) {
      return;
    }

    let uid = this.route.snapshot.firstChild.url[1].path;
    var aud = this.audioPlayer.nativeElement;

    if (uid) {
      this._qservice.nextSong(uid).subscribe(
          (song) => {
            this.song_load_error = false;
            this.current_song = song
            aud.src = song.url
            aud.play();
          },
          (err) => {
            console.log("error loading next song")
            this.song_load_error = true;
            this.current_song = {length:0, url:"", title:""}
          }
        );
    }
  }

  onPlaybackEnd() {
    this.loadNextSong();
  }


}
