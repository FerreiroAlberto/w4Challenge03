import { Component } from "@angular/core";
import { Character } from "../../data/model";
import { getCharacters } from "../../data/state";
import { CardComponent } from "../card/card.component";

@Component({
  selector: "isdi-list",
  standalone: true,
  imports: [CardComponent],
  templateUrl: "./list.component.html",
  styleUrl: "./list.component.css",
})
export class ListComponent {
  characters: Character[] = [];
  message: string = "";
  constructor() {
    this.onFirstLoad();
  }
  onFirstLoad() {
    getCharacters().then((char) => {
      this.characters = char as Character[];
    });
  }
  onDelete(name: Character["name"]) {
    this.characters = this.characters.filter((char) => char.name !== name);
  }

  onTalk(message: Character["message"]) {
    this.message = message;
    console.log(this.message);
  }
}
