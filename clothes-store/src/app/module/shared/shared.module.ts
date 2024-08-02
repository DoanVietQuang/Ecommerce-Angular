import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarContentComponent } from './components/navbar/navbar-content/navbar-content.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { StarRatingComponent } from './components/star-rating/star-rating.component';
import { CartItemComponent } from './components/cart-item/cart-item.component';
import { AddressCardComponent } from './components/address-card/address-card.component';
@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent,
    NavbarContentComponent,
    ProductCardComponent,
    StarRatingComponent,
    CartItemComponent,
    AddressCardComponent,
  ],
  imports: [CommonModule, MatIconModule, MatButtonModule, MatMenuModule],
  exports: [
    NavbarComponent,
    FooterComponent,
    ProductCardComponent,
    CartItemComponent,
    AddressCardComponent,
  ],
})
export class SharedModule {}
