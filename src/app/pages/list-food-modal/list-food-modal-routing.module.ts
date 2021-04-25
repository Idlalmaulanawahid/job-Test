import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListFoodModalPage } from './list-food-modal.page';

const routes: Routes = [
  {
    path: '',
    component: ListFoodModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListFoodModalPageRoutingModule {}
