import { TestBed } from "@angular/core/testing";

import { MesasService } from "./mesas.service";
import products from "./models/productos.json";

describe("MesasService", () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it("should be created", () => {
    const service: MesasService = TestBed.get(MesasService);
    expect(service).toBeTruthy();
  });
});
