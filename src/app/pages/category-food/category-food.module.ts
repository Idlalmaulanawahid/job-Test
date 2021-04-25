import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CategoryFoodPageRoutingModule } from './category-food-routing.module';

import { CategoryFoodPage } from './category-food.page';
import { FlexLayoutModule } from '@angular/flex-layout';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CategoryFoodPageRoutingModule,
    FlexLayoutModule
  ],
  declarations: [CategoryFoodPage]
})
export class CategoryFoodPageModule {}
