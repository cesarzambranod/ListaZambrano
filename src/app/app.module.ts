import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaEstudiantesComponent } from './components/lista-estudiantes/lista-estudiantes.component';
import { ResaltadoDirective } from './directiva/resaltado.directive';

@NgModule({
  declarations: [AppComponent, ListaEstudiantesComponent, ResaltadoDirective],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
