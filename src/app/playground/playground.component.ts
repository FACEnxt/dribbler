import { Component, OnInit,HostListener } from '@angular/core';
import { PlayerService } from '../player.service';
@Component({
  selector: 'app-playground',
  templateUrl: './playground.component.html',
  styleUrls: ['./playground.component.css']
})
export class PlaygroundComponent implements OnInit {

  constructor(private playerservice : PlayerService) { }

  ngOnInit() {
    this.playerservice.dribbling();
  }
  @HostListener('window:keyup', ['$event'])
  keyEvent(event: KeyboardEvent) {
   this.playerservice.scorePlayers(event);
  }
}
