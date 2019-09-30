import { Component, OnInit } from "@angular/core";
import { CocinaService } from "src/app/services/cocina.service";
import { ActivatedRoute } from "@angular/router";
import { MesasService } from "src/app/services/mesas.service";

@Component({
  selector: "app-item-cards",
  templateUrl: "./item-cards.component.html",
  styleUrls: ["./item-cards.component.css"]
})
export class ItemCardsComponent implements OnInit {
  tableNumber: number;
  turn: string;
  products: any[];

  constructor(
    private cocinaService: CocinaService,
    private route: ActivatedRoute,
    private mesasService: MesasService
  ) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.tableNumber = +params.tableNumber;
      this.turn = params.type;
    });
    this.products = this.cocinaService.getProducts();
  }
  addProducts(product) {
    this.mesasService.addProductToOrder(this.tableNumber, product);
  }
  // Agregar extras a productos
  toggleExtra(extra) {
    extra.add = !extra.add;
  }
}
