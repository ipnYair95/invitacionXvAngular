import { Component, OnInit } from '@angular/core';
import { IMap } from '../../interfaces/maps.interface';

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.scss']
})
export class MapaComponent implements OnInit {

  indexDirection = 0;
  isMisa = true;

  defaultDirections: IMap[] = [
    {
      title: 'La misa',
      date: '16:00 hrs.',
      place: 'Parroquia de Cristo Rey',
      direction: 'México S/N, San Juan Tlalpizahuac, 56618 Valle de Chalco Solidaridad, Méx.',
      textChange: 'Ver Fiesta',
      urlImage: './assets/lugares/misa.png',
      url: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6331.905526876154!2d-98.9504149976681!3d19.326953924169032!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85ce1dbe2e56a085%3A0xf9d453216803ac62!2sParroquia%20de%20Cristo%20Rey!5e0!3m2!1ses-419!2smx!4v1678157754989!5m2!1ses-419!2smx'
    },
    {
      title: 'La Fiesta',
      date: '17:30 hrs.',
      place: 'Auditorio de Citlalmina',
      direction: 'Tlacaelel 747, Citlalmina, 56540 Ixtapaluca, Méx.',
      textChange: 'Ver misa',
      urlImage: './assets/lugares/fiesta.png',
      url: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d941.2471137502637!2d-98.93929497083943!3d19.326307264716558!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85ce1da4021495a1%3A0xc47923b282f0fc04!2sAuditorio%20de%20Citlalmina!5e0!3m2!1ses-419!2smx!4v1678157889933!5m2!1ses-419!2smx'
    },
  ]

  directions: IMap[] = []

  constructor() { }

  ngOnInit(): void {
  }

  onClick() {
    this.isMisa = !this.isMisa;
    this.indexDirection = this.isMisa ? 0 : 1;
    console.log(this.indexDirection);
  }

}

