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
import { PortafolioComponent } from './components/home/svg/portafolio/portafolio.component';
import { CarouselComponent } from './components/home/carousel/carousel.component';
import { SalarioComponent } from './components/home/sections/salario/salario.component';
import { MetasComponent } from './components/home/sections/metas/metas.component';
import { PautasAhorroComponent } from './components/home/sections/pautas-ahorro/pautas-ahorro.component';
import { ConocePortafolioComponent } from './components/home/sections/conoce-portafolio/conoce-portafolio.component';
import { CicleComponent } from './components/home/svg/cicle/cicle.component';

@NgModule({
  declarations: [
    AppComponent,
    HistorialComponent,
    AhorrarComponent,
    MiPerfilComponent,
    HomeComponent,
    PortafolioComponent,
    CarouselComponent,
    SalarioComponent,
    MetasComponent,
    PautasAhorroComponent,
    ConocePortafolioComponent,
    CicleComponent,
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
