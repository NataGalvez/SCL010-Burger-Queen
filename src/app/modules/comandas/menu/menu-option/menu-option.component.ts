import { Component, OnInit } from "@angular/core";
import { MesasService } from "src/app/services/mesas.service";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-menu-option",
  templateUrl: "./menu-option.component.html",
  styleUrls: ["./menu-option.component.css"]
})
export class MenuOptionComponent implements OnInit {
  tables: any[];
  turn: string;
  constructor(
    private mesasService: MesasService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.turn = params.type;
    });
    this.tables = this.mesasService.getTables();
  }
}
