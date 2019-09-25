import { Component, OnInit } from "@angular/core";
import mesas from "../../../models/mesas.json";
@Component({
  selector: "app-table",
  templateUrl: "./table.component.html",
  styleUrls: ["./table.component.css"]
})
export class TableComponent implements OnInit {
  tables = mesas;
  type: string;
  time: Date;
  constructor() {
    this.time = new Date();
  }

  ngOnInit() {
    if (this.time.getHours() >= 6 && this.time.getHours() <= 12) {
      this.type = "desayuno";
    } else {
      this.type = "almuerzo";
    }
    console.log(this.time);
  }
}
