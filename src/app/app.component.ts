import { Component, OnInit, HostListener } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import * as AOS from 'aos';
import { DataService } from './services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'invitacion';

  disabled = false;

  constructor(    private dataService: DataService){ }


  ngOnInit(): void {
    AOS.init();
    window.addEventListener('load', AOS.refresh);
  }

  @HostListener('window:resize', ['$event'])
  onWindowResize() {
    this.dataService.screenWidth$.next(window.innerWidth);
    this.dataService.screenHeight$.next(window.innerHeight);
  }

}
