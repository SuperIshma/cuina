import { Component, OnInit } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { Unidad } from 'src/shared/interfaces/unidades.interface';
import { DataService } from 'src/shared/services/data.service';

@Component({
  selector: 'app-unidades',
  templateUrl: './unidades.component.html',
  styleUrls: ['./unidades.component.scss']
})
export class UnidadesComponent implements OnInit {

  public listaUnidades$!: Observable<Unidad[]>;

  constructor(
    private dataSvc: DataService
  ) { }

  ngOnInit(): void {
    this.listaUnidades$ = this.dataSvc.getUnidades();
  }

}
