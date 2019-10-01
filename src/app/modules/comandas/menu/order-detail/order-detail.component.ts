import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { MesasService } from "src/app/services/mesas.service";

@Component({
  selector: "app-order-detail",
  templateUrl: "./order-detail.component.html",
  styleUrls: ["./order-detail.component.css"]
})
export class OrderDetailComponent implements OnInit {
  tableNumber: number;
  orderMesa: any[];

  constructor(
    private route: ActivatedRoute,
    private mesasService: MesasService
  ) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.tableNumber = +params.tableNumber;
    });
    this.orderMesa = this.mesasService.getOrderFromTables(this.tableNumber);
  }
  removeProducts(product) {
    let send = JSON.parse(JSON.stringify(product));
    this.mesasService.removeProductFromOrder(this.tableNumber, send);
  }
  addProducts(product) {
    let send = JSON.parse(JSON.stringify(product));
    this.mesasService.addProductToOrder(this.tableNumber, send);
  }
}
