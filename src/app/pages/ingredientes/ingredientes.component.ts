import { Component, OnInit } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { Ingrediente } from 'src/shared/interfaces/ingredientes.interface';
import { DataService } from 'src/shared/services/data.service';

@Component({
  selector: 'app-ingredientes',
  templateUrl: './ingredientes.component.html',
  styleUrls: ['./ingredientes.component.scss']
})
export class IngredientesComponent implements OnInit {

  public listaIngredientes$!: Observable<Ingrediente[]>;

  constructor(
    private dataSvc: DataService
  ) { }

  ngOnInit(): void {
    this.listaIngredientes$ = this.dataSvc.getIngredientes();
  }

}
