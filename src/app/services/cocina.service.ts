import { Injectable } from "@angular/core";
import productos from "../models/productos.json";
@Injectable({
  providedIn: "root"
})
export class CocinaService {
  private products: any[] = productos;
  constructor() {}
  getProducts() {
    return this.products;
  }
}
