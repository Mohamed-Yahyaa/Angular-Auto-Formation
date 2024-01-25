import { CommonModule } from '@angular/common';
import { GameService } from './../game.service';
import { Component } from '@angular/core';
import { ScoreComponent } from "../score/score.component";

@Component({
    selector: 'app-board',
    standalone: true,
    templateUrl: './board.component.html',
    styleUrl: './board.component.css',
    imports: [ScoreComponent, CommonModule]
})
export class BoardComponent {
  constructor( public boardService: GameService ) { }

  ngOnInit() {
  }


}
