import { shuffledCards } from "./Card";
import { Game } from "./Game";

const divGame = document.querySelector("[data-game]") as HTMLDivElement

const game = new Game(divGame, shuffledCards)
game.init()

