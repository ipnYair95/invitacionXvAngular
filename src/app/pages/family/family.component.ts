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
      Mami, desde que estaba chiquita siempre supe que me amabas, quiero agradecerte por darme la vida, por entregarme todo tu amor, por velar y
      seguir velando mis sueños y cuidar siempre de mi corazón, gracias por escuchar mis dudas y orientarme, y a mis problemas siempre darme consejos
      ayudándome a sentirme mejor. Te amo tanto mami gracias.
      `
    },
    {
      path: `./assets/familia/padre.jpg`,
      name: 'Papá',
      desc: `
      Cuando estaba pequeña me cargabas en tus brazos y me dormías con tus canciones que nadie conocía. Con el tiempo descubrí que eras el primero
      en levantarte para ir a trabajar, pensando en que no me faltara nada, en este momento y mundo siempre preocupándote por mi. Ni con todos los
      años y vidas de este mundo para poder agradecerte todo lo que has hecho por mi, pero te prometo que nunca te olvidare, te agradezco
      todo lo que haz hecho por mi, te amo tanto tu pequeña niña.
      `
    },
    {
      path: `./assets/familia/padrinos.jpg`,
      name: 'Padrinos',
      desc: `
      <b> Madrina </b>
      <p>
        Mi madrina, es una hermosa mujer que me ama, me consiente y me escucha, te agradezco por ser omo mi amiga que disfruta
        verme feliz, te agradezco por ser esa persona especial que me da su amor como el de una madre,
        me das el apoyo de una hermana y por toda tu comprensión, gracias madrina por todo, siempre en mi corazón.
      </p>
      <b> Padrino </b>
      <p>
        Es genial tenerte como mi padrino, eres una persona increíble, quiero agradecerte por todos los momentos que hemos
        compartido, por disfrutar y ser cómplice en mis locuras, te quiero tanto y te agradezco por estar siempre conmigo
        y apoyarme en cada paso.
      </p>
      `
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
