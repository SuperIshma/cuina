import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { MaterialModule } from "src/app/material.module";
import { MuestraDatosComponent } from "./muestra-datos.component";

@NgModule({
    imports: [
        CommonModule,
        MaterialModule
    ],
    declarations: [
        MuestraDatosComponent
    ],
    exports: [
        MuestraDatosComponent
    ]
})
export class MuestraDatosModule {}