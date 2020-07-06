import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import { HistorialComponent } from './components/historial/historial.component';
import { AhorrarComponent } from './components/ahorrar/ahorrar.component';
import { MiPerfilComponent } from './components/mi-perfil/mi-perfil.component';
import { HomeComponent } from './components/home/home.component';

const appRoutes: Routes=[
{path:'',component: HomeComponent},
{path:'',redirectTo:'home',pathMatch:'full'},
{path:'home',component:HomeComponent},
{path:'historial',component:HistorialComponent},
{path:'miperfil',component:MiPerfilComponent},
{path:'ahorrar',component:AhorrarComponent},
{path:'**',component:HomeComponent}
];

export const appRoutingProviders: any[]=[];
export const routing: ModuleWithProviders= RouterModule.forRoot(appRoutes);