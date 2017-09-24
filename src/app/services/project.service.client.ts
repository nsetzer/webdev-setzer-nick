import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import 'rxjs/Rx';
import {environment} from '../../environments/environment';
@Injectable()

export class ProjectService {
  baseUrl = environment.baseUrl;

  constructor(private _http: Http) {
  }

  keywordSearch(keywords) {
    return this._http.get(this.baseUrl + '/api/youtube/query/sampple')
      .map(
        (res: Response) => {
          const data = res.json();
          return data;
        }
      );
  }


}