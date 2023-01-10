import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  screenWidth$ = new BehaviorSubject<number>(  window.innerWidth );

  screenHeight$ = new BehaviorSubject<number>(  window.innerHeight );

  constructor() { }
}
