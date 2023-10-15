import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-extreme-card-pricing',
  templateUrl: './extreme-card-pricing.component.html',
  styleUrls: ['./extreme-card-pricing.component.css']
})
export class ExtremeCardPricingComponent implements OnInit {

  @Input()
  gameCover:string = '';
  @Input()
  gameTitle:string='';
 

  constructor() { }

  ngOnInit(): void {
  }

}
