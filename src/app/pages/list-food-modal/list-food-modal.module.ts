import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListFoodModalPageRoutingModule } from './list-food-modal-routing.module';

import { ListFoodModalPage } from './list-food-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListFoodModalPageRoutingModule
  ],
  declarations: [ListFoodModalPage]
})
export class ListFoodModalPageModule {}
