import { Component, Input, OnInit } from '@angular/core';
import { IGif } from '../../interfaces/gifs.interface';

@Component({
  selector: 'app-gif-card',
  templateUrl: './gif-card.component.html',
  styleUrls: ['./gif-card.component.scss']
})
export class GifCardComponent implements OnInit {

  @Input()
  gif!: IGif;

  isCollapse = true;

  constructor() { }

  ngOnInit(): void {
  }

}
