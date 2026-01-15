import { httpGet } from "./http";
import { ProductsResponse } from "./products.types";

export function getProducts() {
  return httpGet<ProductsResponse>("/products");
}
