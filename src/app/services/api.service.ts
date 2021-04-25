import { Injectable } from '@angular/core';
import { HTTP } from '@ionic-native/http/ngx';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  url: "https://www.themealdb.com/api/json/v1/1/"
  constructor(
    public http: HTTP,
  ) {

  }

  apiFood(param) {
    // console.log("param Sukses", JSON.stringify(param));
    return new Promise((resolve, reject) => {
      this.http.setDataSerializer('json')
      this.http.get('https://www.themealdb.com/api/json/v1/1/' + param, {}, {}).then(
        (res) => {
          console.log("res Sukses", JSON.stringify(res));
          resolve(JSON.parse(res.data));
        },
        (err) => {
          // console.log("err Failed", JSON.stringify(err));
          reject(JSON.parse(err.error));
        }
      );
    });
  }

}
