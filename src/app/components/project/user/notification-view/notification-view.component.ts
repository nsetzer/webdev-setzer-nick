import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { SocialService } from '../../../../services/social.service.client';
import { UserService } from '../../../../services/user.service.client';
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
              private _service: UserService,
              private _socialService: SocialService,
              private sanitizer: DomSanitizer) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
       this.uid = params['uid'];
       this.reload();
    });
  }

  reload() {
    this._socialService.getNotifications(this.uid).subscribe(
        (messages) => {
            this.messages = messages;
        }
    );
  }

  isSuperUser() {
    return this._service.isSuperUser()
  }

  delete(message) {
    this._socialService.deleteNotification(this.uid, message._id)
      .subscribe(
        (messages) => {
            this.messages = messages;
        }
    );

  }

}
