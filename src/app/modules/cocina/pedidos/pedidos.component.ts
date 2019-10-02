import { Component, OnInit } from "@angular/core";
import { MesasService } from "src/app/services/mesas.service";

@Component({
  selector: "app-pedidos",
  templateUrl: "./pedidos.component.html",
  styleUrls: ["./pedidos.component.css"]
})
export class PedidosComponent implements OnInit {
  constructor(private mesasService: MesasService) {}

  ngOnInit() {}
}
