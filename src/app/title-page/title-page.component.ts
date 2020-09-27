import { DataService } from './../services/data.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-title-page',
  templateUrl: './title-page.component.html',
  styleUrls: ['./title-page.component.scss']
})
export class TitlePageComponent {
  date = this.dataService.getTitleDate();

  constructor(private dataService: DataService) { }
}
