import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Ingrediente } from "../interfaces/ingredientes.interface";
import { Unidad } from "../interfaces/unidades.interface";

@Injectable({providedIn: 'root'})
export class DataService {

    constructor(private http: HttpClient){}

    public getIngredientes():Observable<Ingrediente[]> {
        return this.http.get<Ingrediente[]>('ingredientes');
    }

    public getUnidades():Observable<Unidad[]> {
        return this.http.get<Unidad[]>('unidades');
    }
}