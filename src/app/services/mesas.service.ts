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
        console.log(table);
        table.orders.push(product);
      }
    });
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

  getTables() {
    return this.tables;
  }
}
