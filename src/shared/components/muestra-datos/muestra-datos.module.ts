import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { MuestraDatosComponent } from "./muestra-datos.component";

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        MuestraDatosComponent
    ],
    exports: [
        MuestraDatosComponent
    ]
})
export class MuestraDatosModule {}