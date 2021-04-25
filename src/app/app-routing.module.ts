import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'category-food',
    pathMatch: 'full'
  },
  {
    path: 'category-food',
    loadChildren: () => import('./pages/category-food/category-food.module').then( m => m.CategoryFoodPageModule)
  },
  {
    path: 'list-food',
    loadChildren: () => import('./pages/list-food/list-food.module').then( m => m.ListFoodPageModule)
  },
  {
    path: 'food-detail',
    loadChildren: () => import('./pages/food-detail/food-detail.module').then( m => m.FoodDetailPageModule)
  },
  {
    path: 'list-food-modal',
    loadChildren: () => import('./pages/list-food-modal/list-food-modal.module').then( m => m.ListFoodModalPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
