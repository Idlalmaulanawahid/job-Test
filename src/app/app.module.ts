import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { HTTP } from '@ionic-native/http/ngx';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { SharedDirectivesModule } from './directives/shared-directives.module';
import { FlexLayoutModule } from '@angular/flex-layout';
@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    HttpClientModule,
    SharedDirectivesModule,
    FlexLayoutModule
  ],
  providers: [
    StatusBar,
    SplashScreen,
    HTTP,
    {
      provide: RouteReuseStrategy,
      useClass: IonicRouteStrategy,
    }],
  bootstrap: [AppComponent],
})
export class AppModule { }
