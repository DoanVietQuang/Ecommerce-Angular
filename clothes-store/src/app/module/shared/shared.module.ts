import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarContentComponent } from './components/navbar/navbar-content/navbar-content.component';
import { MatIconModule } from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatMenuModule} from '@angular/material/menu';
import { ProductCardComponent } from './components/product-card/product-card.component';
@NgModule({
  declarations: [NavbarComponent, FooterComponent, NavbarContentComponent, ProductCardComponent],
  imports: [CommonModule, MatIconModule, MatButtonModule, MatMenuModule],
  exports: [NavbarComponent, FooterComponent,ProductCardComponent],
})
export class SharedModule {}