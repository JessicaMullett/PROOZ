import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GiftSelectorPage } from '../gift-selector/gift-selector.page';
import { DirectoryPage } from './directory.page';

const routes: Routes = [
  {
    path: '',
    component: DirectoryPage
  },
  {
    path: 'gift-selector',
    component: GiftSelectorPage,
    loadChildren: () => import('.././gift-selector/gift-selector.module').then( m => m.GiftSelectorPageModule) 
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DirectoryPageRoutingModule {}
