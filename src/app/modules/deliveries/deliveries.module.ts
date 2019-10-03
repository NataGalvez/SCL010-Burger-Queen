import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { DeliveriesRoutingModule } from "./deliveries-routing.module";
import { DeliveryComponent } from "./delivery/delivery.component";
import { ReusableModule } from "../reusable/reusable.module";

@NgModule({
  declarations: [DeliveryComponent],
  imports: [CommonModule, DeliveriesRoutingModule, ReusableModule]
})
export class DeliveriesModule {}
