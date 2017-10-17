
import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import 'rxjs/Rx';
import {environment} from '../../environments/environment';

@Injectable()

export class FlickrService {

  baseUrl = environment.baseUrl;

  api = {
    'createWidget'   : this.createWidget,
  };


  constructor(private _http: Http) {
  }

  searchPhotos(text) {

  }
}



