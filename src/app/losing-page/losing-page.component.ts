import { BasicService } from './../services/basic.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-losing-page',
  templateUrl: './losing-page.component.html',
  styleUrls: ['./losing-page.component.scss']
})
export class LosingPageComponent implements OnInit {
  constructor(private basicService: BasicService) { }

  ngOnInit(): void {
    new Audio('../../assets/audio/failure.mp3').play();
    this.basicService.redirect('');
  }
}
