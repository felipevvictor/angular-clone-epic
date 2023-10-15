import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-small-card-label',
  templateUrl: './small-card-label.component.html',
  styleUrls: ['./small-card-label.component.css']
})
export class SmallCardLabelComponent implements OnInit {

  constructor() { }

  @Input()
  gameTitle:string='';

  ngOnInit(): void {
  }

}
