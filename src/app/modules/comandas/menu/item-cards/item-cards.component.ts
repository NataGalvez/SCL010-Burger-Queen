import { Component, OnInit } from "@angular/core";

import productosAlmuerzo from "../../../../models/productos-almuerzo.json";
import productos from "../../../../models/productos.json";
import mesas from "../../../../models/mesas.json";
import { analyzeAndValidateNgModules } from "@angular/compiler";
@Component({
  selector: "app-item-cards",
  templateUrl: "./item-cards.component.html",
  styleUrls: ["./item-cards.component.css"]
})
export class ItemCardsComponent implements OnInit {
  products = productos;
  productsLunch = productosAlmuerzo;
  tables = mesas;
  constructor() {}

  ngOnInit() {}
}
