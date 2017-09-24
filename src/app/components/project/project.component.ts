import { Component, OnInit } from '@angular/core';
import {ProjectService} from '../../services/project.service.client';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {

  constructor(private _service: ProjectService) { }

  alertMessage: Boolean = false;
  successMessage: Boolean = false;

  searchTerm: String;
  searchResults: any[] = [];

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
