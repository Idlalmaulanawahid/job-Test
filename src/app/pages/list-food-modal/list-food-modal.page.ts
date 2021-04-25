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
  searchText: any

  constructor(
    public apiService: ApiService,
    private router: Router,
    private navParams: NavParams,
    public modalController: ModalController

  ) {
    this.searchText = this.navParams?.data.data
    console.log('paramData', JSON.stringify(this.searchText))
  }

  ngOnInit() {

  }

  async closeModal() {
    this.selectCategories = true
    const onClosedData: string = "Wrapped Up!";
    await this.modalController.dismiss(onClosedData);
  }

  searchItems(ev) {
    if (ev.value.length < 1) {
      this.closeModal()
    } else {
      this.apiService.apiFood('search.php?s=' + ev.value).then((result: any) => {
        this.listData = result.meals
        // console.log('sukses', JSON.stringify(this.listData))
      }).catch(err => {
        console.log('error', err)
      });
    }
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
