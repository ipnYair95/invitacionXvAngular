import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-hr-text',
  templateUrl: './hr-text.component.html',
  styleUrls: ['./hr-text.component.scss']
})
export class HrTextComponent implements OnInit {

  @Input()
  text = '';

  constructor() { }

  ngOnInit(): void {
  }

}
