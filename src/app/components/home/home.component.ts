import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public nombreUsuario: string;
  public salario:number;
  public rendimiento:number;
  public gasto:number;
  public saldo:number;
  constructor() {
    this.salario=0;
    this.rendimiento=0;
    this.gasto= this.rendimiento+this.salario;
    this.saldo= this.salario-this.rendimiento;
   }

  ngOnInit(): void {
  }
  guardarDatos(){
    this.gasto= this.rendimiento+this.salario;
    this.saldo= this.salario-this.rendimiento;
  }

}
