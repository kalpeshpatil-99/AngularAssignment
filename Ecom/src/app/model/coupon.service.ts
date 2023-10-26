import { BehaviorSubject } from "rxjs";
import { Injectable } from "@angular/core";

@Injectable()
export class CouponService {
  private couponAppliedSubject = new BehaviorSubject<boolean>(false);
  private couponTokenSubject = new BehaviorSubject<boolean>(false);
  couponApplied = this.couponAppliedSubject.asObservable();
  couponToken = this.couponTokenSubject.asObservable();

  constructor() {}

  setCouponApplied(value: boolean) {
    this.couponAppliedSubject.next(value);
  }
  setCouponToken(value: boolean) {
    this.couponTokenSubject.next(value);
  }
}
