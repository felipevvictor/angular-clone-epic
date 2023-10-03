import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card-label',
  templateUrl: './card-label.component.html',
  styleUrls: ['./card-label.component.css']
})
export class CardLabelComponent implements OnInit {

  @Input()
  gameName:string="";
  @Input()
  gameTitle:string="";
  @Input()
  gamePriceBef:string = "";
  @Input()
  gamePriceAft:string = "";
  @Input()
  gameDesc:string = "";
 

  constructor() { }

  ngOnInit(): void {
  }

}