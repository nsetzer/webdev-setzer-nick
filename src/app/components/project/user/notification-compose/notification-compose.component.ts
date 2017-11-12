import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { SocialService } from '../../../../services/social.service.client';
import { PlaylistService } from '../../../../services/playlist.service.client';
import { DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-notification-compose',
  templateUrl: './notification-compose.component.html',
  styleUrls: ['./notification-compose.component.css']
})
export class NotificationComposeComponent implements OnInit {

  uid : string
  plid : string
  message = ""
  followers = []
  private sub: any;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private _service: SocialService,
              private _plservice: PlaylistService,
              private sanitizer: DomSanitizer) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
       this.uid = params['uid'];
       if (params['plid']) {
         this.plid = params['plid']
       } else {
         this.plid = null
       }
       this.reload();
    });
  }

  reload() {
    this._service.getFollowers(this.uid).subscribe(
        (lst) => { this.followers = lst;},
        (err) => {}
    );

    if (this.plid) {
      this._plservice.findPlaylistById(this.plid).subscribe(
        (lst) => {
          //user/:uid/profile/:puid/:plid
          let uid = this.uid
          let plid = this.plid
          this.message = `Listen To [[${uid},${plid}]]((${lst.name}))`
        },
        (err) => {
          this.message = ""
        }
      )
    }
  }

  sendMessage() {
    this._service.sendNotification(this.uid,this.message).subscribe(
        (res) => {
            let url = "/project/(project:user/" + this.uid + "/messages)"
            this.router.navigateByUrl(url);
        },
        (err) => {},
    );
  }

}
