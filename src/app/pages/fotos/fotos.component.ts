import { Component, OnInit } from '@angular/core';
import SwiperCore, { SwiperOptions, Pagination, Autoplay } from 'swiper';

SwiperCore.use([Pagination, Autoplay, ]);

@Component({
  selector: 'app-fotos',
  templateUrl: './fotos.component.html',
  styleUrls: ['./fotos.component.scss']
})
export class FotosComponent implements OnInit {

  config: SwiperOptions = {
    slidesPerView: 1,
    pagination: true,
    autoplay: {
      delay: 1000,
      disableOnInteraction: false,
      pauseOnMouseEnter: false
    },
    breakpoints: {
      768: {
        slidesPerView: 1.5,
      },
      992: {
        slidesPerView: 2.5,
      },
      1200: {
        slidesPerView: 3,
      }
    }
  };


  constructor( ) {
  }


  ngOnInit(): void {
  }



}
