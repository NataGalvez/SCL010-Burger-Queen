import { Component, OnInit } from "@angular/core";
import productos from "../../../../models/productos.json";
@Component({
  selector: "app-item-cards",
  templateUrl: "./item-cards.component.html",
  styleUrls: ["./item-cards.component.css"]
})
export class ItemCardsComponent implements OnInit {
  products = productos;
  constructor() {}

  ngOnInit() {}
}
