import { Component, Input, Output, EventEmitter } from "@angular/core";
import { Character } from "../../data/model";
import { JsonPipe } from "@angular/common";

@Component({
  selector: "isdi-card",
  standalone: true,
  imports: [JsonPipe],
  template: ` <li class="character col">
    <div class="card character__card">
      <img
        src="../../assets/{{ char.name.toLowerCase() }}.jpg"
        alt="Foto de {{ char.name }}
      {{ char.family }}"
        class="character__picture card-img-top"
      />
      <div class="card-body">
        <h2 class="character__name card-title h4">
          {{ char.name }} {{ char.family }}
        </h2>
        <div class="character__info">
          <ul class="list-unstyled">
            <li>Edad: {{ char.age }} años</li>
            <li>
              Estado:
              <i class="fas fa-thumbs-down"></i>
              <i class="fas fa-thumbs-up"></i>
            </li>
          </ul>
        </div>
        <div class="character__overlay">
          <ul class="list-unstyled">
            <li>Años de reinado: {{ char.reignYears }}</li>
            <li>Arma: {{ char.weapon }}</li>
            <li>Destreza: {{ char.skillLevel }}</li>
            <li>Peloteo: {{ char.serveLevel }}</li>
            <li>Asesora a: {{ char.adviseTo?.name }}</li>
            <li>Sirve a: {{ char.servesTo?.name }}</li>
          </ul>
          <div class="character__actions">
            <button class="character__action btn">habla</button>
            <button class="character__action btn" (click)="sendDelete()">
              muere
            </button>
          </div>
        </div>
      </div>
      <i class="emoji"></i>
    </div>
  </li>`,
  styleUrl: "./card.component.css",
})
export class CardComponent {
  @Input({ required: true }) char!: Character;
  @Output() deleteEvent = new EventEmitter<Character["name"]>();
  @Output() talkEvent = new EventEmitter<Character["message"]>();

  sendDelete() {
    this.deleteEvent.emit(this.char.name);
  }
  sendTalk() {
    this.talkEvent.emit(this.char.message);
  }
}
