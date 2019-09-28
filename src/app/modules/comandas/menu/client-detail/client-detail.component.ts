import { Component, OnInit } from "@angular/core";
import { MesasService } from "src/app/services/mesas.service";
import { ActivatedRoute } from "@angular/router";
import { FormControl } from "@angular/forms";

@Component({
  selector: "app-client-detail",
  templateUrl: "./client-detail.component.html",
  styleUrls: ["./client-detail.component.css"]
})
export class ClientDetailComponent implements OnInit {
  name = new FormControl("");
  tableNumber: number;
  tables: any[];
  constructor(
    private mesasService: MesasService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.tables = this.mesasService.getTables();
    this.route.params.subscribe(params => {
      this.tableNumber = +params.tableNumber;
    });
  }
  client() {
    this.mesasService.saveClient(this.name.value, this.tableNumber);
  }
}
