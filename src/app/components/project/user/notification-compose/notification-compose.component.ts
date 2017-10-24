import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { SocialService } from '../../../../services/social.service.client';
import { DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-notification-compose',
  templateUrl: './notification-compose.component.html',
  styleUrls: ['./notification-compose.component.css']
})
export class NotificationComposeComponent implements OnInit {

  uid : string
  message = ""
  followers = []
  private sub: any;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private _service: SocialService,
              private sanitizer: DomSanitizer) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
       this.uid = params['uid'];
       this.reload();
    });
  }

  reload() {
    this._service.getFollowers(this.uid).subscribe(
        (lst) => { this.followers = lst;},
        (err) => {}
    );
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
