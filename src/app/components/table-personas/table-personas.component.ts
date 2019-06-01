import { Component, OnInit } from '@angular/core';
import { DatosService } from '../../services/datos.service';
import { persona } from '../../models/persona';

@Component({
  selector: 'app-table-personas',
  templateUrl: './table-personas.component.html',
  styleUrls: ['./table-personas.component.css']
})
export class TablePersonasComponent implements OnInit {
  person: persona[];

  constructor(public datosService: DatosService) { }

  ngOnInit() {
    this.person = this.datosService.getPersonas();
  }

}
