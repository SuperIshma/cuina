import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: 'ingredientes', loadChildren: () => import('./pages/ingredientes/ingredientes.module').then(m => m.IngredientesModule)},
  {path: 'unidades', loadChildren: () => import('./pages/unidades/unidades.module').then(m => m.UnidadesModule)},
  {path: '**', redirectTo: '/', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
