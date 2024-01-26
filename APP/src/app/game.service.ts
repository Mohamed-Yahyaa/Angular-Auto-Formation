import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GameService {
  public board : any = [];
  size : number = 9;
  player : string = "X" ;
  score : number = 0;
  isRunning : boolean = false;
  isOver: boolean = false ;
  winner: boolean = false ;

  constructor() {
    this.newGame();
  }

  newGame(){
  this.player = "X";
  this.score = 0
  this.isRunning = false;
  this.isOver = false ;
  this.winner = false;
  this.board = this.createBoard();

  }

  createBoard(){
    let board = [];
    for(let i = 0 ; i<9 ; i++){
    board.push({id: i , state: null})
    };
    return board;
  }

  get getBoard(){
    return this.board;
  }

  set setBoard(board: any){
     this.board = [...board]

  }

  changePlayer(scoreClicked : any){
    this.updateBoard(scoreClicked);
    if(!this.isOver ) this.player = this.player ===  "X" ? "O" : "X";
    this.score++ ;
    this.isOver = this.isOver ? true : false

  }

  updateBoard(scoreClicked : any){
    this.board[scoreClicked.id].state = scoreClicked.state;
    if(this.winner){
      this.winner = true;
      this.isOver = false ;
      this.isOver = true ;
    }
  }
 get gameOver():Boolean{
return this.score > 8 || this.winner ? true : false;
 }

 get isWinner():Boolean{
  return this.checkD() || this.checkR(this.board,"row") || this.checkR(this.board, "col")? true : false;
 }

 checkR(board: any , mode: any){
  const
  ROW = mode === "row" ? true : false,
  DIST = ROW ? 1 : 3,
  NUMTIMES = ROW ? 7 : 3;

  for(let i = 0; i<NUMTIMES ; i += DIST){
    let
    firstScore = board[i],
    secondScore = board[i + DIST].state,
    thirdScore = board[i + (DIST * 2)].state;

    if(firstScore && secondScore && thirdScore){
      if(firstScore === secondScore && secondScore === thirdScore)return true;
    }
  }
return false;

 }
 checkD(){
  const timesRun = 2 ,
  midScore = this.board[4].state;

  for(let i = 0; i <timesRun; i +=2){
    let
    upperCorner = this.board[i].state,
    lowerCorner = this.board[8 - i].state;

    if(midScore && upperCorner && lowerCorner){
      if(midScore === upperCorner && upperCorner === lowerCorner)return true;
    }
  }
return false;
}
}
