import { Injectable } from "@angular/core";
import productos from "../models/productos.json";
@Injectable({
  providedIn: "root"
})
export class CocinaService {
  private products: any[] = productos;
  private listOfOrders: any[] = [];
  constructor() {}
  getProducts() {
    return this.products;
  }

  sendOrderToKitchen(table) {
    const copyOrder = JSON.parse(JSON.stringify(table));
    copyOrder.sent = true;
    copyOrder.doing = false;
    copyOrder.done = false;
    copyOrder.delivered = false;
    copyOrder.date = new Date();
    this.listOfOrders.push(copyOrder);
    console.log(this.listOfOrders);
  }
}
