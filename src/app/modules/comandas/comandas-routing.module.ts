import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { TableComponent } from "./table/table.component";
import { MenuComponent } from "./menu/menu.component";

const routes: Routes = [
  {
    path: "tables",
    component: TableComponent
  },
  {
    path: "tables/:tableNumber/menu/:type",
    component: MenuComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComandasRoutingModule {}
