import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import 'rxjs/Rx';
import {environment} from '../../environments/environment';


@Injectable()

export class ProjectService {

  baseUrl = environment.baseUrl;

  constructor(private _http: Http) {
  }

  keywordSearch(searchTerm) {
    var encTerm = encodeURIComponent(searchTerm);
    var path = this.baseUrl + '/api/youtube/query/' + encTerm;
    return this._http.get(path)
      .map(
        (res: Response) => {
          const data = res.json();
          // add the url, using the current environment for each result
          for (var i = 0; i < data.length; ++i) {
            data[i].url = this.baseUrl + "/api/youtube/" + data[i].videoId
          }
          return data;
        }
      );
  }

  relatedSearch(videoId) {
    //var encTerm = encodeURIComponent(videoId);
    var path = this.baseUrl + '/api/youtube/related/' + videoId;
    return this._http.get(path)
      .map(
        (res: Response) => {
          const data = res.json();
          // add the url, using the current environment for each result
          for (var i = 0; i < data.length; ++i) {
            data[i].url = this.baseUrl + "/api/youtube/" + data[i].videoId
          }
          return data;
        }
      );
  }

}

