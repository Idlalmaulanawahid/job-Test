import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { NavigationExtras, Router } from '@angular/router';
import { Platform, AlertController, ModalController } from '@ionic/angular';
import { ListFoodPage } from '../list-food/list-food.page';
import { ListFoodModalPage } from '../list-food-modal/list-food-modal.page';

@Component({
  selector: 'app-category-food',
  templateUrl: './category-food.page.html',
  styleUrls: ['./category-food.page.scss'],
})
export class CategoryFoodPage implements OnInit {
  options = {
    centeredSlides: true,
    slidesPerView: 1,
    spaceBetween: -60,
  };

  categories = {
    slidesPerView: 2.5,
  };


  listCategory = [];
  listCategoryArea = [];
  listCategoryIngredients = [];

  subscription: any;
  valueSearch: any;

  constructor(
    public apiService: ApiService,
    private router: Router,
    private platform: Platform,
    private alertController: AlertController,
    public modalController: ModalController
  ) { }

  ngOnInit() {
    this.getAllCategory()
    this.getCategoryArea()
    this.getCategoryIngredients()
  }

  getAllCategory() {
    this.apiService.apiFood('categories.php').then((result: any) => {
      this.listCategory = result.categories
    }).catch(err => {
    });
  }

  getCategoryArea() {
    this.apiService.apiFood('list.php?a=list').then((result: any) => {
      this.listCategoryArea = result.meals
    }).catch(err => {
    });
  }

  getCategoryIngredients() {
    this.apiService.apiFood('list.php?i=list').then((result: any) => {
      this.listCategoryIngredients = result.meals
    }).catch(err => {
    });
  }

  showMore(type, category) {
    let dataTmp
    if (type === 'all') {
      dataTmp = this.listCategory
    } else if (type === 'area') {
      dataTmp = this.listCategoryArea
    } else if (type === 'ingredients') {
      dataTmp = this.listCategoryIngredients
    }
    let navigationExtras: NavigationExtras = {
      queryParams: {
        data: JSON.stringify(dataTmp),
        type: type,
        category: category
      }
    };
    this.router.navigate(['list-food'], navigationExtras);
  }

  ionViewDidEnter() {
    this.subscription = this.platform.backButton.subscribe(async () => {
      if (
        this.router.isActive('/category-food', true) && this.router.url === '/category-food'
      ) {
        const alert = await this.alertController.create({
          header: 'Are you sure you want to exit',
          buttons: [
            {
              text: 'NO',
              role: 'cancel'
            }, {
              text: 'YES',
              handler: () => {
                navigator['app'].exitApp();
              }
            }
          ]
        });

        await alert.present();
      }
    });
  }

  async searchItems(ev, type) {
    if (ev.value.length > 0) {
      console.log('masuk ifff', JSON.stringify(ev.value.length), JSON.stringify(type))
      const modal = await this.modalController.create({
        component: ListFoodModalPage,
        componentProps: {
          data: ev.value,
          type: type
        }

      });

      modal.onDidDismiss().then((dataReturned) => {
        console.log('masuk dataReturned', JSON.stringify(dataReturned))
        // if (dataReturned !== null) {
        //   this.dataReturned = dataReturned.data;
        // }
      });

      return await modal.present();
    }

  }
}
