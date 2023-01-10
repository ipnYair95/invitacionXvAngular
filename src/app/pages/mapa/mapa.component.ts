import { Component, OnInit } from '@angular/core';
import { IMap } from '../../interfaces/maps.interface';

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.scss']
})
export class MapaComponent implements OnInit {

  indexDirection = 0;
  isPuebla: null | boolean = null;

  defaultDirections: IMap[] = [
    {
      title: 'La misa',
      date: '17 de Diciembre de 2022 - 13:00 hrs.',
      place: 'La Compañía - Templo Expiatorio del Espíritu Santo',
      direction: 'Calle 4 Sur 102. Centro, Puebla, Pue.',
      textChange: 'Ver Fiesta',
      urlImage: './assets/lugares/misa.png',
      url: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d50743.240809095674!2d-98.20995934107323!3d19.041128382908536!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85cfc0e63bff00ad%3A0x826c495a496d11de!2sLa%20Compa%C3%B1%C3%ADa%20-%20Templo%20Expiatorio%20del%20Esp%C3%ADritu%20Santo!5e0!3m2!1ses-419!2smx!4v1667921330183!5m2!1ses-419!2smx'
    },
    {
      title: 'La Fiesta',
      date: '17 de Diciembre de 2022 - 15:30 hrs.',
      place: 'Salón del Hotel Lastra',
      direction: 'Calzada de los Fuertes 2633, Rincón del Bosque, Puebla',
      textChange: 'Ver misa',
      urlImage: './assets/lugares/fiesta.png',
      url: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d471.4059272319782!2d-98.18585478531953!3d19.052856399999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85cfc0fd9ba32aeb%3A0xee2d30c2be5f5eff!2sHotel%20Lastra!5e0!3m2!1ses-419!2smx!4v1667921700197!5m2!1ses-419!2smx'
    },
    {
      title: 'La fiesta',
      date: '7 de Enero de 2023 - 16:30 hrs.',
      place: 'Salón Disco Arlequín',
      direction: 'Av. Cuauhtémoc #9, San Juan Tlalpizahuac, Estado de México, Carretera Federal México - Puebla.',
      textChange: 'Ver Fiesta',
      urlImage: './assets/lugares/fiesta2.jpg',
      url: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7530.062370695912!2d-98.94752950690905!3d19.3244530219282!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85ce1d94c244b573%3A0x985fcf20f1b9c9d!2sSal%C3%B3n%20Disco%20Arlequ%C3%ADn!5e0!3m2!1ses-419!2smx!4v1667923926685!5m2!1ses-419!2smx'
    }
  ]

  directions: IMap[] = []

  constructor() { }

  ngOnInit(): void {
  }

  setDirection() {

    this.indexDirection = this.indexDirection === 1 ? 0 : 1;
    return;

  }

  filter(isPuebla: boolean) {

    this.directions = [];

    setTimeout(() => {
      this.directions = isPuebla
      ? this.defaultDirections.slice(0, 2)
      : this.defaultDirections.slice(2);

    this.indexDirection = 0;
    this.isPuebla = isPuebla;

    }, 100);


  }



}


enum IndexDirection {
  MISA_PUEBLA = 0,
  PARTY_PUEBLA = 1,
  PARTY_MEX = 2
}
