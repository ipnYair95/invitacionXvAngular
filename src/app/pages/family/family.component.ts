import { Component, OnInit } from '@angular/core';
import { IFamily } from '../../interfaces/family.interface';

@Component({
  selector: 'app-family',
  templateUrl: './family.component.html',
  styleUrls: ['./family.component.scss']
})
export class FamilyComponent implements OnInit {

  cards: IFamily[] = [
    {
      path: `./assets/familia/madre.jpg`,
      name: 'Mamá',
      desc: `
      Porque me diste la vida y me entregaste tu amor para mi sueños, modelaste mi corazón porque escuchaste mi dudas y tus
      consejos me hicieron mejor gracias por hacerme mi fiesta.
      `
    },
    {
      path: `./assets/familia/padre.jpg`,
      name: 'Papá',
      desc: `
      Dicen que a lo largo de nuestra vida tenemos dos grandes amores, uno con el que te casas o vives para siempre ese es el
      padre de tus hijos. Esa persona con la que consigues las oportunidades y que a mi me enseño a lo luchar por lo que quiero
      y en vez de renunciar es solo darle tiempo para conseguir lo que quiero.
      `
    },
    {
      path: `./assets/familia/padrinos.jpg`,
      name: 'Padrinos',
      desc: `
      Se que ustedes como los padrinos de velación de los quince años me han regalado su paciencia y regalarme su apoyo junto con
      mis papás, se han valido de sus corazones para que me enseñen a amar y dios me ha permitido llegar a este día.
      `
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
