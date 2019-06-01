import { Injectable } from '@angular/core';
import { persona } from '../models/persona';

@Injectable({
  providedIn: 'root'
})
export class DatosService {
  personas: persona[];

  constructor() {
    this.personas=[];
   }

   getPersonas(){
    return this.personas;
   }
   setPersona(persona: persona){
     this.personas.push(persona);
     return false;
   }
}
