import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { HeaderComponent } from './components/header/header.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ApiInterceptor } from 'src/core/interceptors/api.interceptor';
import { MuestraDatosComponent } from 'src/shared/components/muestra-datos/muestra-datos.component';
import { MuestraDatosModule } from 'src/app/shared/components/muestra-datos/muestra-datos.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MuestraDatosComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    HttpClientModule,
    MaterialModule,
    MuestraDatosModule
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: ApiInterceptor, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
