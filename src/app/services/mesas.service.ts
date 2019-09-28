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
  // Remueve los productos a la orden en el número de mesa correspondiente
  removeProductFromOrder(tableNumber, product): any {
    this.tables.forEach(table => {
      if (table.tableNumber === tableNumber) {
        console.log(table);

        table.orders.forEach((order, index) => {
          if (order.name === product.name) {
            if (order.quantity > 1) {
              this.subtractQuantity(product.name);
            } else {
              table.orders.splice(index, 1);
            }
          }
        });
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

  private subtractQuantity(selectedProduct) {
    this.products.forEach(product => {
      if (product.name === selectedProduct) {
        product.quantity--;
      }
    });
  }
  private getQuantity(selectedProduct) {
    this.products.forEach(product => {
      if (product.name === selectedProduct) {
        product.quantity++;
      }
    });
  }

  getTables() {
    return this.tables;
  }

  saveClient(name, tableNumber) {
    this.tables.forEach(table => {
      if (table.tableNumber === tableNumber) {
        table.client = name;
        console.log(table);
      }
    });
  }
}
