import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { ComandasRoutingModule } from "./comandas-routing.module";
import { TableComponent } from "./table/table.component";
import { MenuComponent } from './menu/menu.component';
import { MenuSelectComponent } from './menu/menu-select/menu-select.component';
import { MenuOptionComponent } from './menu/menu-option/menu-option.component';
import { ItemCardsComponent } from './menu/item-cards/item-cards.component';
import { ClientDetailComponent } from './menu/client-detail/client-detail.component';
import { OrderDetailComponent } from './menu/order-detail/order-detail.component';
import { OrderComponent } from './menu/order/order.component';
import { OrderTotalComponent } from './menu/order-total/order-total.component';

@NgModule({
  declarations: [TableComponent, MenuComponent, MenuSelectComponent, MenuOptionComponent, ItemCardsComponent, ClientDetailComponent, OrderDetailComponent, OrderComponent, OrderTotalComponent],
  imports: [CommonModule, ComandasRoutingModule]
})
export class ComandasModule {}
