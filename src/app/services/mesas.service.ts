import { Injectable } from "@angular/core";
import mesas from "../models/mesas.json";
import productos from "../models/productos.json";

@Injectable({
  providedIn: "root"
})
export class MesasService {
  private tables: any[] = mesas;
  private products: any[] = productos;

  constructor() {}
  // Añade los productos a la orden en el numero de mesa correspondiente
  addProductToOrder(tableNumber, product): any {
    this.tables.forEach(table => {
      if (table.tableNumber === tableNumber) {
        if (!this.checkIfProductExists(table, product.name)) {
          table.orders.push(product);
        }
        this.getQuantity(product.name);
      }
    });
  }

  private checkIfProductExists(table, productName): boolean {
    let output = false;
    table.orders.forEach(order => {
      if (order.name === productName) {
        output = true;
      }
    });
    return output;
  }

  getOrderFromTables(tableNumber): any[] {
    let output = [];
    this.tables.forEach(table => {
      if (table.tableNumber === tableNumber) {
        output = table.orders;
      }
    });
    return output;
  }
  getQuantity(selectedProduct) {
    this.products.forEach(product => {
      if (product.name === selectedProduct) {
        product.quantity++;
      }
    });
  }

  getTables() {
    return this.tables;
  }
}
