import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-order-total",
  templateUrl: "./order-total.component.html",
  styleUrls: ["./order-total.component.css"]
})
export class OrderTotalComponent implements OnInit {
  constructor(private route: ActivatedRoute) {}

  ngOnInit() {}

  getTableId(): number {
    return +this.route.snapshot.paramMap.get("tableNumber");
  }

  sendOrder() {
    // Me usa el servicio y necesita el id
    let id = this.getTableId();
  }
}
