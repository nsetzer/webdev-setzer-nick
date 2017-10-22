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
  //uid : string;
  @ViewChild('audioPlayer') audioPlayer;

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
          this.onRouteChanged(uid);
          console.log(event);
        }
      }
    });

  }

  reload() {
  }

  onRouteChanged(uid) {
    console.log("route changed " + uid)
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

    if (!aud.error) {
      if (aud.paused) {
        aud.play()
      } else {
        aud.pause()
      }
    } else {
      console.error(aud.error);
    }

  }

  loadCurrentSong(){
    if (!this.route.snapshot.firstChild) {
      return;
    }
    let uid = this.route.snapshot.firstChild.url[1].path;
    var aud = this.audioPlayer.nativeElement;

    if (uid) {
      this._qservice.currentSong(uid).subscribe(
          (song) => {
            console.log(song);
            aud.src = song.url
            aud.play();
          },
          (err) => {
            console.log("error loading next song")
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
            console.log(song);
            aud.src = song.url
            aud.play();
          },
          (err) => {
            console.log("error loading next song")
          }
        );
    }
  }

  onPlaybackEnd() {
    this.loadNextSong();
  }


}
