import { CommonModule } from '@angular/common';
import { GameService } from './game.service';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BoardComponent } from "./board/board.component";


@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, BoardComponent, CommonModule]
})


export class AppComponent {
title(title: any) {
  throw new Error('Method not implemented.');
}


constructor(public GameService: GameService){}
resetGame(){
  this.GameService.newGame()
} 
}
