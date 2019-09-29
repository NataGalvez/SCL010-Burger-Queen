import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { MesasService } from "src/app/services/mesas.service";

@Component({
  selector: "app-order-total",
  templateUrl: "./order-total.component.html",
  styleUrls: ["./order-total.component.css"]
})
export class OrderTotalComponent implements OnInit {
  tableNumber: number;
  mesa: any[];
  totalOrder: number;

  constructor(
    private route: ActivatedRoute,
    private mesasService: MesasService
  ) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.tableNumber = +params.tableNumber;
    });
    this.mesa = this.mesasService.getTable(this.tableNumber);
  }

  sendOrder() {
    // Me usa el servicio y necesita el id
    let id = this.tableNumber;
  }
}
