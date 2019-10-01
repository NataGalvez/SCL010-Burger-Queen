import { Injectable } from "@angular/core";
import mesas from "../models/mesas.json";

@Injectable({
  providedIn: "root"
})
export class MesasService {
  private tables: any[] = mesas;

  constructor() {}
  // Añade los productos a la orden en el numero de mesa correspondiente
  addProductToOrder(tableNumber, product): any {
    this.tables.forEach(table => {
      if (table.tableNumber === tableNumber) {
        if (!this.checkIfProductExists(table, product)) {
          table.orders.push(product);
        }
        this.getQuantity(table.orders, product);
      }
    });
    this.totalOrder(tableNumber);
  }
  // Remueve los productos a la orden en el número de mesa correspondiente
  removeProductFromOrder(tableNumber, product): any {
    this.tables.forEach(table => {
      if (table.tableNumber === tableNumber) {
        table.orders.forEach((order, index) => {
          if (order.name === product.name && this.sameExtras(order, product)) {
            if (order.quantity > 1) {
              this.subtractQuantity(table.orders, product);
            } else {
              table.orders.splice(index, 1);
            }
          }
        });
      }
    });
    this.totalOrder(tableNumber);
  }

  // Verifica si un producto existe dentro de un arreglo de orden
  private checkIfProductExists(table, product): boolean {
    let output = false;
    table.orders.forEach(order => {
      if (order.name === product.name && this.sameExtras(order, product)) {
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

  private subtractQuantity(listProducts, selectedProduct) {
    listProducts.forEach(product => {
      if (
        product.name === selectedProduct.name &&
        this.sameExtras(product, selectedProduct)
      ) {
        product.quantity--;
      }
    });
  }
  private getQuantity(listProducts, selectedProduct) {
    listProducts.forEach(product => {
      if (
        product.name === selectedProduct.name &&
        this.sameExtras(product, selectedProduct)
      ) {
        product.quantity++;
      }
    });
  }

  private sameExtras(product1, product2): boolean {
    let output = true;
    product1.extras.forEach((extra, index) => {
      if (extra.add !== product2.extras[index].add) {
        output = false;
      }
    });
    return output;
  }

  getTables() {
    return this.tables;
  }

  // Retorna los detalles de 1 mesa, según un número de mesa enviado
  getTable(tableNumber) {
    let output = [];
    this.tables.forEach(table => {
      if (table.tableNumber === tableNumber) {
        output = table;
      }
    });
    return output;
  }

  saveClient(name, tableNumber) {
    this.tables.forEach(table => {
      if (table.tableNumber === tableNumber) {
        table.client = name;
      }
    });
  }

  // Calcula el total de una orden

  private totalOrder(tableNumber) {
    let total = 0;
    this.tables.forEach(table => {
      if (table.tableNumber === tableNumber) {
        table.orders.forEach(order => {
          total = total + order.price * order.quantity;
        });
        table.total = total;
      }
    });
  }
}
