import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { MesasService } from "src/app/services/mesas.service";
import { CocinaService } from "src/app/services/cocina.service";

@Component({
  selector: "app-order-total",
  templateUrl: "./order-total.component.html",
  styleUrls: ["./order-total.component.css"]
})
export class OrderTotalComponent implements OnInit {
  tableNumber: number;
  mesa: any;
  totalOrder: number;

  constructor(
    private route: ActivatedRoute,
    private mesasService: MesasService,
    private cocinaService: CocinaService
  ) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.tableNumber = +params.tableNumber;
    });
    this.mesa = this.mesasService.getTable(this.tableNumber);
  }

  sendOrder() {
    this.cocinaService.sendOrderToKitchen(this.mesa);
    this.mesasService.cleanTableOrder(this.mesa.tableNumber);
  }
}
