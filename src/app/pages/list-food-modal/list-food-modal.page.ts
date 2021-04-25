import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { Router, NavigationExtras } from '@angular/router';
import { NavParams, ModalController } from '@ionic/angular';

@Component({
  selector: 'app-list-food-modal',
  templateUrl: './list-food-modal.page.html',
  styleUrls: ['./list-food-modal.page.scss'],
})
export class ListFoodModalPage implements OnInit {

  listCategory = [];
  valueCategory: any;
  listData = [];
  type: any;
  selectCategories: boolean = true
  loadSkeletonContent: boolean = true


  constructor(
    public apiService: ApiService,
    private router: Router,
    private navParams: NavParams,
    public modalController: ModalController

  ) {
  }

  ngOnInit() {
    this.apiService.apiFood('search.php?s=').then((result: any) => {
      console.log('masuk skeleton',)
      this.loadSkeletonContent = false
      this.listData = result.meals
    }).catch(err => {
      console.log('error', err)
    });
  }

  async closeModal() {
    this.selectCategories = true
    this.loadSkeletonContent = false
    const onClosedData: string = "Wrapped Up!";
    await this.modalController.dismiss(onClosedData);
  }

  searchItems(ev) {
    this.loadSkeletonContent = true
    this.apiService.apiFood('search.php?s=' + ev.value).then((result: any) => {
      console.log('masuk skeleton',)
      this.loadSkeletonContent = false
      this.listData = result.meals
      // console.log('sukses', JSON.stringify(this.listData))
    }).catch(err => {
      console.log('error', err)
    });

  }

  viewDetail(idMeal) {
    console.log('idMeal', JSON.stringify(idMeal))
    this.closeModal()
    let navigationExtras: NavigationExtras = {
      queryParams: {
        idMeal: idMeal,
      }
    };
    this.router.navigate(['food-detail'], navigationExtras);
  }

}
