import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from '../../../../services/user.service.client';
import { QueueService } from '../../../../services/queue.service.client';

@Component({
  selector: 'app-song-queue',
  templateUrl: './song-queue.component.html',
  styleUrls: ['./song-queue.component.css']
})
export class SongQueueComponent implements OnInit {

  uid : string;
  plid : string;
  user : any;
  playlist : any = {songs:[]};
  private sub: any;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private _service: UserService,
              private _qservice: QueueService) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
       this.uid = params['uid'];
       this.reload();
    });
  }

  reload() {
    this.user = this._service.findUserById(this.uid).subscribe(
      (user) => {
        this.user = user;
        console.log("found user")
      },
      (err) => {
        console.log("error loading user")
      }
    )

    this._qservice.getQueue(this.uid).subscribe(
      (playlist) => {
        this.playlist = playlist;
        console.log("found queue")
        console.log(playlist)
      },
      (err) => {
        console.log("error loading queue")
      }
    )
  }

  saveChanges() {
    this._qservice.setQueue(this.uid, this.playlist).subscribe(
      (res) => {
        let url = "/project/(project:user/" + this.uid + ")"
        this.router.navigateByUrl(url);
      }
    );

  }

  reorderList(event) {

    // drag and drop does not upadte the internal list, only the view
    var song = this.playlist.songs.splice(event.startIndex, 1)[0]
    this.playlist.songs.splice(event.endIndex, 0, song);

    // this.playlist.songs.map( x => x._id )

  }

}