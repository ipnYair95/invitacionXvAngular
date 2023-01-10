import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit {

  date1 = '';
  date2 = '';

  constructor() {
    this.date1 = new Date("17-Dec-2022").toLocaleString("en-US", { timeZone: "America/Mexico_City" });
    this.date2 = new Date("7-Jan-2023").toLocaleString("en-US", { timeZone: "America/Mexico_City" });
  }

  ngOnInit(): void {
  }

}
