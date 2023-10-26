import { Component } from "@angular/core";
import { Cart } from "../model/cart.model";
import { CouponService } from "../model/coupon.service";

@Component({
  templateUrl: "cartDetail.component.html",
  styleUrls: ["./cartDetail.component.css"],
})
export class CartDetailComponent {
  couponApplied: boolean = false;
  coupon: boolean = false;

  constructor(public cart: Cart, private couponService: CouponService) {
    this.couponService.couponApplied.subscribe((data) => {
      this.couponApplied = data;
    })
    this.couponService.couponToken.subscribe((data) => {
      this.coupon = data;
    });
  }

  couponApply() {
    this.coupon = !this.coupon;
    this.couponService.setCouponToken(this.coupon);
  }
}
