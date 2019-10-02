import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ReusableModule } from "../reusable/reusable.module";
import { CocinaRoutingModule } from "./cocina-routing.module";
import { PedidosComponent } from "./pedidos/pedidos.component";

@NgModule({
  declarations: [PedidosComponent],
  imports: [CommonModule, CocinaRoutingModule, ReusableModule]
})
export class CocinaModule {}
