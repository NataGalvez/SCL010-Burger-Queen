import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { HomeRoutingModule } from "./home-routing.module";
import { WelcomeComponent } from "./welcome/welcome.component";
import { ReusableModule } from "../reusable/reusable.module";

@NgModule({
  declarations: [WelcomeComponent],
  imports: [CommonModule, HomeRoutingModule, ReusableModule]
})
export class HomeModule {}
