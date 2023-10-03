import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card-pricing',
  templateUrl: './card-pricing.component.html',
  styleUrls: ['./card-pricing.component.css']
})
export class CardPricingComponent implements OnInit {

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
