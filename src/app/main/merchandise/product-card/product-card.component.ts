import { UserDetailService } from '../../../services/user-detail.service';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../../../environments/environment';
import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {

  constructor(private http: HttpClient, private userDetailService: UserDetailService) { }
  logoURL = "";

  @Input()
  productDetails: { _id: String, title: String, price: Number, size: [{ small: Boolean, medium: Boolean, large: Boolean, xlarge: Boolean }], category: String, thumbnail: String, description: String, } =
    { _id: '', title: '', price: 0, size: [{ small: false, medium: false, large: false, xlarge: false }], category: '', thumbnail: '', description: '' };
  thumbnailURL;
  purchaseUrl: string = environment.currentServerURL + "/api/purchaseMerchandise";
  quantity: number = 1;
  address: string = 'Kansas, MO';
  ngOnInit() {
    this.logoURL = environment.currentServerURL + "/api/logos/f1-logo.png";
    this.thumbnailURL = environment.currentServerURL + "/api/product/thumbnail/" + this.productDetails.thumbnail;
    // this.thumbnailURL = environment.currentServerURL + "/api/product/thumbnail/2.jpg";
  }
  buy() {
    if (this.userDetailService.isLoggedIn) {
      this.http.post(this.purchaseUrl, { productId: this.productDetails._id, productTitle: this.productDetails.title, userId: this.userDetailService.id, quantity: this.quantity, sellingPrice: this.productDetails.price, deliveryAddress: this.address })
        .subscribe((res) => {
          if (res['data']) {
            this.userDetailService.updatePoints(10);
            this.toast("Purchased successfully.", 4000, "green")
            this.toast("Your order Id is " + res['data'] + ".", 4000, "green")
            this.toast("Product will be delivered to your address.", 4000, "green")
          } else if (res['error']) {
            this.toast(res['error'], 4000, "red")
          }
        });
    } else {
      this.toast("Please login to buy products !", 4000, "red")
    }
  }

  toast(message: string, duration: number, color: string) {
    Materialize.toast(message, duration, color);
  }

}
