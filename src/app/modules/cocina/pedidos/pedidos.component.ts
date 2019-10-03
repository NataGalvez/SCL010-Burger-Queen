import { Component, OnInit } from "@angular/core";
import { CocinaService } from "src/app/services/cocina.service";

@Component({
  selector: "app-pedidos",
  templateUrl: "./pedidos.component.html",
  styleUrls: ["./pedidos.component.css"]
})
export class PedidosComponent implements OnInit {
  orders: any[];

  constructor(private cocinaService: CocinaService) {}

  ngOnInit() {
    this.orders = this.cocinaService.getOrders();
    console.log(this.orders);
  }
}
