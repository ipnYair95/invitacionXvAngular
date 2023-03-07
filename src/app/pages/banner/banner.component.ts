import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit {

  date = '';

  constructor() {
    this.date = new Date("April 22, 2023 16:00:00").toLocaleString("en-US", { timeZone: "America/Mexico_City" });
  }

  ngOnInit(): void {
  }

}
