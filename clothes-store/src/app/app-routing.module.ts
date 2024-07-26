import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  //   { path: 'home', component: MainCarouselComponent },
  //   { path: 'women/clothing/lengha_choli', component: YourLenghaCholiComponent },
  //   { path: 'women/clothing/women_dress', component: YourWomenDressComponent },
  //   { path: 'women/clothing/women_saree', component: YourWomenSareeComponent },
  //   { path: '', redirectTo: '/home', pathMatch: 'full' },  // Redirect mặc định tới 'home'
  //   { path: '**', redirectTo: '/home' }  // Redirect cho các path không hợp lệ
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
