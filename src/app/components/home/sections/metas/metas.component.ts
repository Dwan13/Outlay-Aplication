import { Component, OnInit, Input, Output } from '@angular/core';
declare var jQuery:any;
declare var $:any;

@Component({
  selector: 'app-metas',
  templateUrl: './metas.component.html',
  styleUrls: ['./metas.component.css']
})
export class MetasComponent implements OnInit {
 @Input() gasto:number;
 viaje:number;
 computador:number;
 percent:number;
  constructor() {
 this.gasto=0;
 this.viaje=8000000
 this.computador=7000000
 this.percent=Math.round((this.gasto*100)/this.computador)
  
  }
 
  ngOnInit(): void {
    
  }

}
