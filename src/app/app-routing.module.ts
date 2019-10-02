import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

const routes: Routes = [
  {
    path: "home",
    loadChildren: () =>
      import("./modules/home/home.module").then(mod => mod.HomeModule)
  },
  {
    path: "kitchen",
    loadChildren: () =>
      import("./modules/cocina/cocina.module").then(mod => mod.CocinaModule)
  },
  {
    path: "",
    redirectTo: "home",
    pathMatch: "full"
  },
  {
    path: "",
    loadChildren: () =>
      import("./modules/comandas/comandas.module").then(
        mod => mod.ComandasModule
      )
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
