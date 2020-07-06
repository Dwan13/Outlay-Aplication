import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {routing, appRoutingProviders} from './app.routing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { HistorialComponent } from './components/historial/historial.component';
import { AhorrarComponent } from './components/ahorrar/ahorrar.component';
import { MiPerfilComponent } from './components/mi-perfil/mi-perfil.component';
import { HomeComponent } from './components/home/home.component';
import { fromEventPattern } from 'rxjs';

@NgModule({
  declarations: [
    AppComponent,
    HistorialComponent,
    AhorrarComponent,
    MiPerfilComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    routing
  ],
  providers: [appRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
