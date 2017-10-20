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

    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        // this._activatedRoute.snapshot is up to date
        var uid = this.route.snapshot.firstChild.url[1].path
        this.onRouteChanged(uid);
      }
    });
  }

  ngOnInit() {
  }

  reload() {
  }

  onRouteChanged(uid) {
    console.log("route changed " + uid)
  }

  openProfileHome() {
    let uid = this.route.snapshot.firstChild.url[1].path;

    if (uid) {
        let url = "/project/(project:user/" + uid + ")"
        this.router.navigateByUrl(url);
    }
  }

  onQueueChanged() {
    let uid = this.route.snapshot.firstChild.url[1].path;
    if (uid) {
      console.log("(home) queue changed for " + uid);
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
    }

  }


}
