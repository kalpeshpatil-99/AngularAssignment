import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { ModelModule } from "../model/model.module";
import { StoreComponent } from "./store.component";
import { CartSummaryComponent } from "./cartSummary.component";
import { CartDetailComponent } from "./cartDetail.component";
import { CheckoutComponent } from "./checkout.component";
import { RouterModule } from "@angular/router";
import { CouponComponent } from "./coupon.component";
import { DescriptionComponent } from "./description.component";

@NgModule({
  imports: [
    ModelModule, 
    BrowserModule, 
    FormsModule,
    RouterModule
  ],
  declarations: [
    StoreComponent,
    CartSummaryComponent,
    CartDetailComponent,
    CheckoutComponent,
    CouponComponent,
    DescriptionComponent
  ],
  exports: [
    StoreComponent, 
    CartDetailComponent,
    CheckoutComponent, 
    CouponComponent, 
    DescriptionComponent
  ],
})
export class StoreModule {}
