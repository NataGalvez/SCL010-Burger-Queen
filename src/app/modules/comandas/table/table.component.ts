import { Component, OnInit } from "@angular/core";
import { MesasService } from "../../../services/mesas.service";
@Component({
  selector: "app-table",
  templateUrl: "./table.component.html",
  styleUrls: ["./table.component.css"]
})
export class TableComponent implements OnInit {
  tables: any[];
  type: string;
  time: Date;
  constructor(private mesasService: MesasService) {
    this.time = new Date();
  }

  ngOnInit() {
    this.tables = this.mesasService.getTables();
    if (this.time.getHours() >= 6 && this.time.getHours() <= 12) {
      this.type = "desayuno";
    } else {
      this.type = "almuerzo";
    }
    console.log(this.time);
  }
}
