import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-food-detail',
  templateUrl: './food-detail.page.html',
  styleUrls: ['./food-detail.page.scss'],
})
export class FoodDetailPage implements OnInit {

  listData: any;

  constructor(
    private route: ActivatedRoute,
    public apiService: ApiService
  ) {
    this.route.queryParams.subscribe((params) => {
      if (params && params.idMeal) {
        this.getDetailItems(params.idMeal)
      }
    });
  }

  ngOnInit() {
  }

  getDetailItems(ev: any) {
    this.apiService.apiFood('lookup.php?i=' + ev).then((result: any) => {
      this.listData = result.meals[0]
      let dataTmpIngredient = [];
      let dataTmpMeasure = [];
      Object.keys(this.listData).forEach(item => {
        if (item.substring(0, 13) === "strIngredient") {
          if (this.listData[item] != "") dataTmpIngredient.push(this.listData[item]);
        } else if (item.substring(0, 10) === "strMeasure") {
          if (this.listData[item] != "") dataTmpMeasure.push(this.listData[item]);
        }
      });

      this.listData['ingredient'] = []
      for (let i = 0; i < dataTmpIngredient.length; i++) {
        this.listData['ingredient'].push({ ingredient: [dataTmpIngredient[i]] + ' : ' + dataTmpMeasure[i] });
      }

      console.log('ingredient', JSON.stringify(this.listData.ingredient))
    }).catch(err => {
      console.log('error', err)
    });
  }

}
