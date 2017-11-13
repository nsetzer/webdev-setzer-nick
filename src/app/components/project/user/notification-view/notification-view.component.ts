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

            // parse the message for embedded links and create a proper
            //

            for (let x=0; x < this.messages.length; x++) {
              let m = this.messages[x].message
              let a = m.indexOf("[[",0)
              if (a<0) {
                continue
              }
              let b = m.indexOf(",",a)
              let c = m.indexOf("]]",b)
              let d = m.indexOf("((",c)
              let e = m.indexOf("))",d)
              let uid = this.uid
              let puid = m.substring(a+2,b)
              let plid = m.substring(b+1,c)
              let inner = m.substring(d+2,e)

              let href = `/project/(project:user/${uid}/profile/${puid}/${plid})`
              let link = `<a href="${href}">${inner}</a>`

              this.messages[x].message = m.substring(0,a) + link + m.substring(e+2)
            }
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
