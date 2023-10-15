import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-extreme-card-label',
  templateUrl: './extreme-card-label.component.html',
  styleUrls: ['./extreme-card-label.component.css']
})
export class ExtremeCardLabelComponent implements OnInit {

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
