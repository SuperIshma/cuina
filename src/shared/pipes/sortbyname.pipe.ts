import { Pipe, PipeTransform } from "@angular/core";
import { Ingrediente } from 'src/shared/interfaces/ingredientes.interface';
import { Receta } from "../interfaces/recetas.interface";
import { Unidad } from "../interfaces/unidades.interface";

@Pipe({
    name: 'sortbyname',
})

export class SortByNamePipe implements PipeTransform {
    transform(values: (Ingrediente[] | Receta[]), arg:string = 'asc'): (Ingrediente[] | Receta[]) {
        if (arg.toLowerCase() === 'asc'){
            values.sort((a, b) => {
                return a.nombre > b.nombre ? 1 : a.nombre < b.nombre ? -1 : 0;
            });
        }
        if (arg.toLowerCase() === 'desc'){
            values.sort((a, b) => {
                return a.nombre > b.nombre ? -1 : a.nombre < b.nombre ? 1 : 0;
            });
        }
        return values;
    }
}