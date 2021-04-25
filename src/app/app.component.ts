import { Component } from '@angular/core';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Plugins } from '@capacitor/core';
import { Router } from '@angular/router';
const { SplashScreen } = Plugins;
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(
    private statusBar: StatusBar,
    private router: Router
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.statusBar.styleDefault();
    setTimeout(() => {
      console.log('Hide Splash Screen')
      SplashScreen.hide();
      this.router.navigateByUrl("category-food")
    }, 3000);

  }
}
