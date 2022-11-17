import { Component, Input, OnInit } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { Ingrediente } from 'src/shared/interfaces/ingredientes.interface';
import { DataService } from 'src/shared/services/data.service';

@Component({
  selector: 'app-muestra-datos',
  templateUrl: './muestra-datos.component.html',
  styleUrls: ['./muestra-datos.component.scss']
})
export class MuestraDatosComponent implements OnInit {
  @Input() datos!: any[];
  @Input() tipoDeDatos!: string;

  public show: boolean = false;
  public columnas:string[] = [];
  public colTypes:string[] = [];

  private titles = {
    ingredientes: ['nombre', 'divisible', 'editar', 'borrar'],
    unidades: ['descripcion', 'abreviatura', 'editar', 'borrar']
  };
  
  private types = {
    ingredientes: ['string', 'boolean', 'action', 'action'],
    unidades: ['string', 'string', 'string',  'action', 'action']
  }

  constructor() { }

  ngOnInit(): void {
    // this.datos.sort((a, b) => {
    //   return a.nombre > b.nombre ? 1 : a.nombre < b.nombre ? -1 : 0;
    // });
    this.columnas = this.titles[this.tipoDeDatos as keyof typeof this.titles];
    this.colTypes = this.types[this.tipoDeDatos as keyof typeof this.types];
    this.show = true;
    console.log(this.datos);
    console.log(this.columnas);
    console.log(this.colTypes);
  }

  public borrarElemento(index: number) {
    console.log('Borrado elemento: ', index);
  }
}
