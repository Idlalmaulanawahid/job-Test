import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FoodDetailPageRoutingModule } from './food-detail-routing.module';

import { FoodDetailPage } from './food-detail.page';
import { SharedDirectivesModule } from 'src/app/directives/shared-directives.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FoodDetailPageRoutingModule,
    SharedDirectivesModule
  ],
  declarations: [FoodDetailPage]
})
export class FoodDetailPageModule {}
