import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-extreme-card',
  templateUrl: './extreme-card.component.html',
  styleUrls: ['./extreme-card.component.css']
})
export class ExtremeCardComponent implements OnInit {

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
