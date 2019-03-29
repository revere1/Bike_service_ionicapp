import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { Toast } from '@ionic-native/toast/ngx';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { SigninPage } from '../pages/signin/signin';
import { LocationPage } from '../pages/location/location';
import { TabsPage } from '../pages/tabs/tabs';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Connectivity } from '../providers/connectivity-service/connectivity-service';
import { SpinnerProvider } from '../providers/spinnerProvider';
import { GoogleMaps } from '../providers/google-maps';
import { GeocodingService } from '../providers/geocode.service';
import { Network } from '@ionic-native/network';
import { Geolocation } from '@ionic-native/geolocation';
import { BikeServicePage } from '../pages/bike-service/bike-service';
import { ViewPackagePage } from '../pages/view-package/view-package';
import { SelectPackagePage } from '../pages/select-package/select-package';
import { BookNowPage } from '../pages/book-now/book-now';
import { LoginPage } from '../pages/login/login';
import { OtpPage } from '../pages/otp/otp';
import { MyprofilePage } from '../pages/myprofile/myprofile';
import { EditProfilePage } from '../pages/edit-profile/edit-profile';
import { ManageAddressPage } from '../pages/manage-address/manage-address';
import { ReviewAddressPage } from '../pages/review-address/review-address';
import { AddAddressPage } from '../pages/add-address/add-address';
import { EditAddressPage } from '../pages/edit-address/edit-address';
@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    SigninPage,
    TabsPage,
    LocationPage,
    BikeServicePage,
    ViewPackagePage,
    SelectPackagePage,
    BookNowPage,
    LoginPage,
    MyprofilePage,
    EditProfilePage,
    ManageAddressPage,
    AddAddressPage,
    EditAddressPage,
    ReviewAddressPage,
    OtpPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    ReactiveFormsModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    SigninPage,
    TabsPage,
    LocationPage,
    BikeServicePage,
    ViewPackagePage,
    SelectPackagePage,
    BookNowPage,
    LoginPage,
    EditProfilePage,
    ManageAddressPage,
    MyprofilePage,
    ReviewAddressPage,
    AddAddressPage,
    EditAddressPage,
    OtpPage
    
  ],
  providers: [
    StatusBar,
    SplashScreen,
    ReactiveFormsModule,
    FormsModule,
    Geolocation, 
    Network,
    Toast,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    Connectivity, SpinnerProvider, GoogleMaps, GeocodingService
  ]
})
export class AppModule { }
