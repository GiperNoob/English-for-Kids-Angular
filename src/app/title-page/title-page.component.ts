import { DataService, ITitleCard } from './../services/data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-title-page',
  templateUrl: './title-page.component.html',
  styleUrls: ['./title-page.component.scss']
})
export class TitlePageComponent implements OnInit {
  data: Array<ITitleCard>;

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.data = this.dataService.getTitleData();
  }
}
