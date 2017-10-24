import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { SocialService } from '../../../../services/social.service.client';
import { DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-notification-view',
  templateUrl: './notification-view.component.html',
  styleUrls: ['./notification-view.component.css']
})
export class NotificationViewComponent implements OnInit {

  uid     : string;
  messages = []
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
    this._service.getNotifications(this.uid).subscribe(
        (messages) => {
            this.messages = messages;
            console.log("got msg return")
            console.log(this.messages)
        }
    );
  }

}