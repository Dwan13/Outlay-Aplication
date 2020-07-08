import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-salario',
  templateUrl: './salario.component.html',
  styleUrls: ['./salario.component.css']
})
export class SalarioComponent implements OnInit {
  @Input() nombre:string;
  @Input() presupuesto:number;
  @Input() rendimiento:number;
  @Input() saldo:number;

  constructor() { 
    this.nombre="Camila"
    this.presupuesto=1600000
    this.rendimiento=30000
    this.saldo=this.presupuesto-this.rendimiento
  }

  ngOnInit(): void {
  }

}
