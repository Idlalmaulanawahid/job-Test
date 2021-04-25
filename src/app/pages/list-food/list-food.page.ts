import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { ActivatedRoute, Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-list-food',
  templateUrl: './list-food.page.html',
  styleUrls: ['./list-food.page.scss'],
})
export class ListFoodPage implements OnInit {

  listCategory = [];
  valueCategory: any;
  listData = [];
  type: any;

  constructor(
    public apiService: ApiService,
    private route: ActivatedRoute,
    private router: Router,

  ) {

    this.route.queryParams.subscribe((params) => {
      console.log('type', JSON.stringify(params.type))
      console.log('category', JSON.stringify(params.category))
      console.log('Navparam', JSON.stringify(params.data))

      if (params && params.data) {
        this.type = params.type
        this.listCategory = JSON.parse(params.data);

        var i;
        for (i = 0; i < this.listCategory.length; i++) {
          if (params.type === 'all') {
            this.listCategory[i].strValue = this.listCategory[i]['strCategory'];
            delete this.listCategory[i].key1;
          } else if (params.type === 'area') {
            this.listCategory[i].strValue = this.listCategory[i]['strArea'];
            delete this.listCategory[i].key1;
          } else if (params.type === 'ingredients') {
            this.listCategory[i].strValue = this.listCategory[i]['strIngredient'];
            delete this.listCategory[i].key1;
          }
        }

        if (params.type === 'all') {
          this.valueCategory = params.category ? params.category : this.listCategory[0].strValue
          this.getFilterData('c=' + this.valueCategory)
        } else if (params.type === 'area') {
          this.valueCategory = params.category ? params.category : this.listCategory[0].strValue
          this.getFilterData('a=' + this.valueCategory)
        } else if (params.type === 'ingredients') {
          this.valueCategory = params.category ? params.category : this.listCategory[0].strValue
          this.getFilterData('i=' + this.valueCategory)
        }

      }
    })
  }

  ngOnInit() {

  }

  ionViewWillEnter() {

  }

  changeSelect(event, data) {

    if (this.type === 'all') {
      const index = this.listCategory.findIndex(
        item => item.strValue === data
      );
      this.valueCategory = this.listCategory[index].strValue
      this.getFilterData('c=' + this.valueCategory)
    } else if (this.type === 'area') {
      const index = this.listCategory.findIndex(
        item => item.strValue === data
      );
      this.valueCategory = this.listCategory[index].strValue
      this.getFilterData('a=' + this.valueCategory)
    } else if (this.type === 'ingredients') {
      const index = this.listCategory.findIndex(
        item => item.strValue === data
      );
      this.valueCategory = this.listCategory[index].strValue
      this.getFilterData('i=' + this.valueCategory)
    }
  }

  getFilterData(param) {
    this.apiService.apiFood('filter.php?' + param).then((result: any) => {
      this.listData = result.meals
      // console.log('sukses', JSON.stringify(this.listData))
    }).catch(err => {
      console.log('error', err)
    });
  }

  searchItems(ev) {
    this.apiService.apiFood('search.php?s=' + ev.value).then((result: any) => {
      this.listData = result.meals
      // console.log('sukses', JSON.stringify(this.listData))
    }).catch(err => {
      console.log('error', err)
    });
  }

  viewDetail(idMeal) {
    console.log('idMeal', JSON.stringify(idMeal))
    let navigationExtras: NavigationExtras = {
      queryParams: {
        idMeal: idMeal,
      }
    };
    this.router.navigate(['food-detail'], navigationExtras);
  }

}
