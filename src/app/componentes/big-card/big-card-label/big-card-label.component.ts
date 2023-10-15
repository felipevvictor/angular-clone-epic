import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-big-card-label',
  templateUrl: './big-card-label.component.html',
  styleUrls: ['./big-card-label.component.css']
})
export class BigCardLabelComponent implements OnInit {

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
