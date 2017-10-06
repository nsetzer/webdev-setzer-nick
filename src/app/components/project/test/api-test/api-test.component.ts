import { Component, OnInit } from '@angular/core';
import {ProjectService} from '../../../../services/project.service.client';

@Component({
  selector: 'app-api-test',
  templateUrl: './api-test.component.html',
  styleUrls: ['./api-test.component.css']
})
export class ApiTestComponent implements OnInit {

  constructor(private _service: ProjectService) { }

  alertMessage: Boolean = false;
  successMessage: Boolean = false;

  searchTerm: String;
  searchResults: any[] = [0,];

  ngOnInit() {

  }

  keywordSearch() {

    return this._service.keywordSearch(this.searchTerm)
        .subscribe(
            (data: any[]) => {
                this.successMessage = true;
                this.searchTerm = null;
                this.searchResults = data;
            }
        );

  }

}
