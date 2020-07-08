import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pautas-ahorro',
  templateUrl: './pautas-ahorro.component.html',
  styleUrls: ['./pautas-ahorro.component.css']
})
export class PautasAhorroComponent implements OnInit {
  public status;
  constructor() { 
    this.status="1";
  }
  
  cambiarEstado(estado){
    if(estado=="1"){
      this.status="1";
    }
    if(estado=="2"){
      this.status="2";
    }
    if(estado=="3"){
      this.status="3";
    }
  }
  ngOnInit(): void {
  }

}
