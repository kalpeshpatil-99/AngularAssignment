import { ActivatedRoute, Router } from "@angular/router";
import { ProductRepository } from "../model/product.repository";
import { Product } from "./../model/product.model";
import { Component, OnInit } from "@angular/core";
import { Cart } from "../model/cart.model";

@Component({
  selector: "description",
  templateUrl: "description.component.html",
  styleUrls: ['./description.component.css']
})
export class DescriptionComponent {
  product: Product = new Product();

  constructor(
    private repository: ProductRepository,
    private activeRoute: ActivatedRoute,
    private cart: Cart,
    private router: Router
  ) {
    Object.assign(
      this.product,
      repository.getProduct(activeRoute.snapshot.params["id"])
    );
  }

  addProductToCart(product: Product) {
    this.cart.addLine(product);
    this.router.navigateByUrl("/cart");
  }

  goBack(){
    this.router.navigateByUrl("/store")
  }
}
