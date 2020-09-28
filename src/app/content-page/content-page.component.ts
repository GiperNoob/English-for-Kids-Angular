import { DataService } from './../services/data.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-content-page',
  templateUrl: './content-page.component.html',
  styleUrls: ['./content-page.component.scss']
})
export class ContentPageComponent {
  data = this.dataService.getDate('Action Set(A)');
  constructor(private dataService: DataService) { }
}
