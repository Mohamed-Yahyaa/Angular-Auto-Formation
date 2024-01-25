import { CommonModule } from '@angular/common';
import { GameService } from './../game.service';
import { Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-score',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './score.component.html',
  styleUrl: './score.component.css'
})
export class ScoreComponent implements OnInit{

  constructor(public GameService: GameService){}


  @Input() score: any;

  ngOnInit(): void {

  }

  changePlayerTurn(){
    this.GameService.isRunning = true;
    if(this.GameService.isRunning && this.score.state === null){
      this.score.state === this.GameService.player;
      this.GameService.changePlayer(this.score);
    }
  }

}
