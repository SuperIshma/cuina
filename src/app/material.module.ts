import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table'
import { MatToolbarModule } from '@angular/material/toolbar';

@NgModule({
  exports: [
    MatButtonModule,
    MatIconModule,
    MatTableModule,
    MatToolbarModule
  ]
})
export class MaterialModule { }