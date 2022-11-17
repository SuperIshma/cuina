// Core
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Modules
import { UnidadesRoutingModule } from './unidades-routing.module';
import { MaterialModule } from 'src/app/material.module';

// Components
import { UnidadesComponent } from './unidades.component';
import { DataService } from 'src/shared/services/data.service';
import { MuestraDatosComponent } from 'src/shared/components/muestra-datos/muestra-datos.component';
import { MuestraDatosModule } from 'src/app/shared/components/muestra-datos/muestra-datos.module';

@NgModule({
  declarations: [
    UnidadesComponent,
    //MuestraDatosComponent
  ],
  imports: [
    CommonModule,
    UnidadesRoutingModule,
    MaterialModule,
    MuestraDatosModule
  ],
  providers: [
    DataService
  ],
})
export class UnidadesModule { }
