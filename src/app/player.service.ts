import { Injectable } from '@angular/core';
import { PlayerClass } from './player';
import { PLAYERS } from './player-stock';

@Injectable()
export class PlayerService {

  constructor() { }

  getPlayers() : PlayerClass[] {
    return PLAYERS ;
  }
}
