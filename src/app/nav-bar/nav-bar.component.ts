import { BasicService } from './../services/basic.service';
import { DataService } from './../services/data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})

export class NavBarComponent implements OnInit {
  public links: Array<string> = [];

  constructor(
    private serviceData: DataService,
    public basicService: BasicService
  ) { }

  ngOnInit(): void {
    this.links = this.serviceData.getLinks();
  }
}
