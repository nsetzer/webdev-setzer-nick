import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import 'rxjs/Rx';
import {environment} from '../../environments/environment';


@Injectable()

export class ProjectService {

  baseUrl = environment.baseUrl;

  keyword_state = {results:[],searchTerm:""};
  related_state = {results:[],searchTerm:""};

  constructor(private _http: Http) {
  }

  keywordSearch(searchTerm) {
    this.keyword_state.searchTerm = searchTerm;
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
          this.keyword_state.results = data;
          this.clearPreviousRelatedSearch();
          return data;
        }
      );
  }

  getPreviousKeywordSearch() {
    return this.keyword_state;
  }

  clearPreviousKeywordSearch() {
    this.keyword_state = {results:[],searchTerm:""};
  }

  relatedSearch(videoId) {
    //var encTerm = encodeURIComponent(videoId);
    this.related_state.searchTerm = videoId;
    var path = this.baseUrl + '/api/youtube/related/' + videoId;
    return this._http.get(path)
      .map(
        (res: Response) => {
          const data = res.json();
          // add the url, using the current environment for each result
          for (var i = 0; i < data.length; ++i) {
            data[i].url = this.baseUrl + "/api/youtube/" + data[i].videoId
          }
          this.related_state.results = data;
          this.clearPreviousKeywordSearch();
          return data;
        }
      );
  }

  getPreviousRelatedSearch() {
    return this.related_state;
  }

  clearPreviousRelatedSearch() {
    this.related_state = {results:[],searchTerm:""};
  }

  getPreviousSearchResults() {

    if (this.keyword_state.searchTerm !== "") {
      return this.keyword_state;
    }

    if (this.related_state.searchTerm !== "") {
      return {results:this.related_state.results,
              searchTerm:"related:"+this.related_state.searchTerm};
    }

    return {results:[],searchTerm:""};
  }

  databaseReset() {
    return this._http.delete(this.baseUrl +
     `/api/reset`)
     .map(
       (res: Response) => {
         const data = res.json();
         return data;
       }
     );
  }

}

