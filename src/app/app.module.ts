import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NabvarComponent } from './components/nabvar/nabvar.component';
import { FormRegistroComponent } from './components/form-registro/form-registro.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DatosService } from './services/datos.service';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { TablePersonasComponent } from './components/table-personas/table-personas.component';


@NgModule({
  declarations: [
    AppComponent,
    NabvarComponent,
    FormRegistroComponent,
    TablePersonasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFontAwesomeModule,
    ReactiveFormsModule
  ],
  providers: [DatosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
