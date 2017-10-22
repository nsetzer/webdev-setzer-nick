
import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import 'rxjs/Rx';
import {environment} from '../../environments/environment';

@Injectable()

export class FlickrService {

  baseUrl = environment.baseUrl;

  api = {
    'searchPhotos'   : this.searchPhotos,
  };

  constructor(private _http: Http) {
  }

  searchPhotos(text) {
    text = encodeURIComponent(text);
    return this._http.get(this.baseUrl + `/api/search?text=${text}` )
     .map(
       (res: Response) => {
         const data = res.json();
         return data;
       }
     );
  }
}



