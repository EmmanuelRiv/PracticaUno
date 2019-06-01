import { Component, OnInit } from '@angular/core';
import { DatosService } from '../../services/datos.service';
import { FormGroup, Validators, FormControl} from '@angular/forms';

@Component({
  selector: 'app-form-registro',
  templateUrl: './form-registro.component.html',
  styleUrls: ['./form-registro.component.css']
})
export class FormRegistroComponent implements OnInit {
  form = new FormGroup({
    Nombre: new FormControl('',Validators.required),
    Correo: new FormControl('',[Validators.required,Validators.email]),
    Sexo: new FormControl('',Validators.required),
    Edad: new FormControl('',Validators.required)
})
  
  Icono:string[] = ["fa fa-camera","fa fa-android","fa fa-adn","fa fa-amazon","fa fa-500px"];
  constructor(public datosService:DatosService) { }

  ngOnInit() {
  }

  guardarPers(parametro){
    this.datosService.setPersona({
      icono:this.Icono[Math.floor(Math.random()*5)].toString(),
      nombre:parametro.value.Nombre,
      correo:parametro.value.Correo,
      sexo:parametro.value.Sexo,
      edad:parametro.value.Edad
  });
    return false;
  }

}
