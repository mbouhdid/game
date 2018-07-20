import { Component, OnInit } from '@angular/core';
import { Gamer } from '../gamer';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  /**
   * @type number[]
   */
  public counter: number[];

  public total: number;

  /**
   * nombre max des allumettes
   * @type {number}
   */
  private readonly max: number = 15;

  /**
   * nombre minimum des allumettes
   * @type {number}
   */
  private readonly min: number = 9;

  /**
   * constante Joueur 1
   * @type {object}
   */
  public readonly player1: object = {
    id: 1,
    name: "Joueur1"
  }

  /**
   * constante Joueur 2
   * @type {object}
   */
  public readonly player2: object = {
    id: 2,
    name: "Joueur2"
  }

  /**
   * id joueur inactif
   * @type {string}
   */
  public idInactifPlayer: number = 2;

  /**
   * Vainqueur
   * @type {Gamer}
   */
  public winner: Gamer;

  /**
   * Tableau de joueurs
   * @type Gamer[]
   */
  public gamers: Gamer[] = [];

  constructor() { }

  ngOnInit() {
    this.initCounter();
    this.initGamers();
  }

  /**
   * Initialisation du conteur
   */
  public initCounter() {
    this.initTotal();
  }

  /**
   * Initialisation des joueurs
   */
  public initGamers() {
    this.gamers = [new Gamer(this.player1), new Gamer(this.player2)];
  }

  /**
   * Supprimer les allumettes
   * @param {number} nb
   * @param {number} idPlayer
   */
  public delete(nb: number, idPlayer: number) {
    this.total = this.total - nb
    this.initInactifPlayer(idPlayer);
    if (this.total > 0) {
      this.counter = new Array(this.total);
    } else {
      this.winner = this.getPlayerById(idPlayer);
    }
  }

  /**
   * retourne un joueur à travers un id
   * @param {Gamer} idPlayer
   */
  public getPlayerById(idPlayer: number): Gamer {
    return this.gamers.find((gamer: Gamer) => {
      return gamer.id === idPlayer;
    });
  }

  /**
   * Initialisation total
   */
  public initTotal() {
    this.total = (Math.round(Math.random()) * (this.max - this.min)) + this.min;
    this.counter = new Array(this.total);
  }

  /**
   * restart
   */
  public restartGame() {
    this.initTotal();
    this.winner = null;
  }

  /**
   * Initialisation inactif player
   * @param {number} idPlayer
   */
  private initInactifPlayer(idPlayer: number) {
    let gamer: Gamer = this.getPlayerById(idPlayer);
    this.idInactifPlayer = gamer.id;
  }
}
