import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-big-card-pricing',
  templateUrl: './big-card-pricing.component.html',
  styleUrls: ['./big-card-pricing.component.css']
})
export class BigCardPricingComponent implements OnInit {

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
