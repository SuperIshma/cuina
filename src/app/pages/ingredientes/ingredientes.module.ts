// Core
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Modules
import { IngredientesRoutingModule } from './ingredientes-routing.module';
import { MaterialModule } from 'src/app/material.module';

// Components
import { IngredientesComponent } from './ingredientes.component';
import { DataService } from 'src/shared/services/data.service';
import { MuestraDatosComponent } from 'src/shared/components/muestra-datos/muestra-datos.component';
import { SortByNamePipe } from 'src/shared/pipes/sortbyname.pipe';
import { MuestraDatosModule } from 'src/app/shared/components/muestra-datos/muestra-datos.module';

@NgModule({
  declarations: [
    IngredientesComponent,
    //MuestraDatosComponent,
    SortByNamePipe
  ],
  imports: [
    CommonModule,
    IngredientesRoutingModule,
    MaterialModule,
    MuestraDatosModule
  ],
  providers: [
    DataService
  ],
})
export class IngredientesModule { }
