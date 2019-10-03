import { Component, OnInit } from "@angular/core";
import { CocinaService } from "src/app/services/cocina.service";

@Component({
  selector: "app-delivery",
  templateUrl: "./delivery.component.html",
  styleUrls: ["./delivery.component.css"]
})
export class DeliveryComponent implements OnInit {
  orders: any[] = [];
  constructor(private cocinaService: CocinaService) {}

  ngOnInit() {
    this.orders = this.cocinaService.getOrders();
  }
}
