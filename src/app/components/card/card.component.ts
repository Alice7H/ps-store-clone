import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit{

  @Input()
  gameCover: string = "/assets/bt-5.jpg";
  @Input()
  gameLabel: string = "";
  @Input()
  gameType: string = "XPO | PS4";
  @Input()
  gamePrice: string = "R$399,00";
  @Input()
  gameTitle: string = "Play it Now!";

  ngOnInit(): void {
    // throw new Error('Method not implemented.');
  }

}
