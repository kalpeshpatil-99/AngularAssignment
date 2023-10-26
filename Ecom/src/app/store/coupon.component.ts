import { CouponService } from "./../model/coupon.service";
import { Router } from "@angular/router";
import { Component } from "@angular/core";

@Component({
  selector: "coupon",
  templateUrl: "coupon.component.html",
})
export class CouponComponent {
  count: boolean = false;
  constructor(private route: Router, private couponService: CouponService) {}

  applyCoupon() {
    this.count = true;
    alert("Coupon Redeem Sucessfully");
    this.couponService.setCouponApplied(true);
  }

  closeCard() {
    if (!this.count) {
      this.couponService.setCouponApplied(false);
    }
    this.route.navigate(["/store"]);
  }
}
