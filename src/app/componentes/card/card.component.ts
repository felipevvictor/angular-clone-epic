import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input()
  gameCover:string = '';
  @Input()
  gameName:string='';
  @Input()
  gameTitle:string='';
  @Input()
  gamePriceBef:string = ''
  @Input()
  gamePriceAft:string = ''
  @Input()
  gameDesc:string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
