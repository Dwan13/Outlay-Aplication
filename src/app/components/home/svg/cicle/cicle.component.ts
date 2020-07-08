import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-cicle',
  templateUrl: './cicle.component.html',
  styleUrls: ['./cicle.component.css']
})
export class CicleComponent implements OnInit {
@Input() percent:number;
  constructor() {
    this.percent=0;
   }

  ngOnInit(): void {
  }

}
