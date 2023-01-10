import { Component, Input, OnInit } from '@angular/core';
import { IFamily } from '../../interfaces/family.interface';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input()
  item!: IFamily;

  constructor() { }

  ngOnInit(): void {
  }

  setFontSize(){

    let minSize = 275;
    let fontSize = 12;

    const size = this.item.desc.length;
    fontSize = ( (minSize * fontSize) / size ) + 6;

    return {
      'font-size': `${fontSize}px`
    }

  }



}
