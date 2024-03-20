import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { ListComponent } from "./list/list.component";

@Component({
  selector: "isdi-root",
  standalone: true,
  imports: [RouterOutlet, ListComponent],
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.css",
})
export class AppComponent {
  title = "GoT2";
}
