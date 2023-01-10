import { ViewportScroller } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  links: Links[] = [
    { url: 'home', desc: 'Inicio' },
    { url: 'fotos', desc: 'Hola' },
    { url: 'familia', desc: 'Mis seres queridos' },
    { url: 'requisitos', desc: 'Requisitos' },
    { url: 'mapa', desc: '¿Dónde ir?' },
  ]

  isCollapsed = true;

  constructor(private scroller: ViewportScroller) { }

  ngOnInit(): void {
  }

  navigate(id: string){
    this.isCollapsed = !this.isCollapsed;
    this.scroller.scrollToAnchor( id );
  }

}


interface Links{
  url: string;
  desc: string;
}
