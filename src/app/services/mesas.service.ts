import { Injectable } from "@angular/core";
import mesas from "../models/mesas.json";

@Injectable({
  providedIn: "root"
})
export class MesasService {
  private tables: any[] = mesas;
  constructor() {}
  getTables() {
    return this.tables;
  }
}
