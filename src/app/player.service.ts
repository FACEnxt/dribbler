import { Injectable } from '@angular/core';
import { PlayerClass } from './player';
import { PLAYERS } from './player-stock';

@Injectable()
export class PlayerService {

  constructor() { }

  private players : PlayerClass[] = PLAYERS;
  getPlayers() : PlayerClass[] {
    return this.players ;
  }
  addPlayer(name: string): void{
   var newPlayer = {name:name,keyCode:'A',color:'#341122'};
   this.players.push(newPlayer);
 }

}
