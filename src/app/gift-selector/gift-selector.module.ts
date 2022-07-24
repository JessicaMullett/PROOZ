import { CollectionDrawerComponent } from './../collection-drawer/collection-drawer.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GiftSelectorPageRoutingModule } from './gift-selector-routing.module';

import { GiftSelectorPage } from './gift-selector.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GiftSelectorPageRoutingModule,
  ],
  declarations: [GiftSelectorPage, CollectionDrawerComponent]
})
export class GiftSelectorPageModule {}
