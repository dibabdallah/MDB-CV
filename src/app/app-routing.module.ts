import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { SlideComponent } from './slide/slide.component';
import { PricingComponent } from './pricing/pricing.component';

const routes: Routes = [
  { path: 'accueil', component: AccueilComponent },
  { path: 'slide', component: SlideComponent  },
  { path: 'pricing', component: PricingComponent },
  { path: '', redirectTo: '/accueil', pathMatch: 'full' },
];
@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }

