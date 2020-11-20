import { Component, OnInit } from '@angular/core';
import { BasicService } from '../services/basic.service';

@Component({
  selector: 'app-winner-page',
  templateUrl: './winner-page.component.html',
  styleUrls: ['./winner-page.component.scss']
})
export class WinnerPageComponent implements OnInit {
  constructor(private basicService: BasicService) { }

  ngOnInit(): void {
    new Audio('../../assets/audio/success.mp3').play();
    this.basicService.redirect('');
  }
}
