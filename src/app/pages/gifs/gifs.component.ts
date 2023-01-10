import { Component, OnInit } from '@angular/core';
import { IGif } from '../../interfaces/gifs.interface';

@Component({
  selector: 'app-gifs',
  templateUrl: './gifs.component.html',
  styleUrls: ['./gifs.component.scss']
})
export class GifsComponent implements OnInit {

  gifs: IGif[] = [
    {
      title: 'Traigas mi regalo n.n',
      icon: 'fa-gift',
      desc: 'Tu eres el regalo, pero si tráeme algo xd'
    },
    {
      title: 'Vengas bañadito y bonito',
      icon: 'fa-shower',
      desc: 'Pa tomarnos muchas fotos'
    },
    {
      title: 'Traer ganas de bailar',
      icon: 'fa-music',
      desc: 'Con todo el flow'
    },
    {
      title: 'Con toda la actitud',
      icon: 'fa-star',
      desc: 'Hasta que termine la noche'
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
