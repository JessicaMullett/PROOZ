import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GiftSelectorPage } from './gift-selector.page';

const routes: Routes = [
  {
    path: '',
    component: GiftSelectorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GiftSelectorPageRoutingModule {}
