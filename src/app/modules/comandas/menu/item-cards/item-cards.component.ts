import { Component, OnInit } from "@angular/core";
import { CocinaService } from "src/app/services/cocina.service";

@Component({
  selector: "app-item-cards",
  templateUrl: "./item-cards.component.html",
  styleUrls: ["./item-cards.component.css"]
})
export class ItemCardsComponent implements OnInit {
  products: any[];
  constructor(private cocinaService: CocinaService) {}

  ngOnInit() {
    this.products = this.cocinaService.getProducts();
  }
}
