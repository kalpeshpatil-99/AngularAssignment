import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./app.component";
import { StoreModule } from "./store/store.module";
import { StoreComponent } from "./store/store.component";
import { CheckoutComponent } from "./store/checkout.component";
import { CartDetailComponent } from "./store/cartDetail.component";
import { RouterModule } from "@angular/router";
import { CouponComponent } from "./store/coupon.component";
import { DescriptionComponent } from "./store/description.component";

@NgModule({
  imports: [
    BrowserModule,
    StoreModule,
    RouterModule.forRoot([
      {
        path: "store",
        component: StoreComponent,
      },
      {
        path: "cart",
        component: CartDetailComponent,
      },
      {
        path: "checkout",
        component: CheckoutComponent,
      },
      {
        path: "coupon",
        component: CouponComponent
      },
      {
        path: "description/:id",
        component: DescriptionComponent
      },
      {
        path: "admin",
        loadChildren: () =>
          import("./admin/admin.module").then((m) => m.AdminModule),
      },
      { path: '', redirectTo: '/coupon', pathMatch:'full'},
      { path: "**", redirectTo: "/store" },
    ]),
  ],
  providers: [],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
