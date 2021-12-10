import { Component } from '@angular/core';
import { CitiesService } from './services/cities/cities.service';

import { getMessaging, getToken } from "firebase/messaging";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'firebase-example';

  constructor(
    private readonly _citiesServices: CitiesService
  ) {
    const messaging = getMessaging();
    getToken(messaging, { vapidKey: "BNK409PxMU02sJEbIKR3enRDr-LY2biz9T4yTVDK3wvDk6FYhlvSZh8f52ENNd3HsbOBPfCt2Ku1gDLC3O-US3c" }).then(currentToken => {
      console.log(currentToken);
    }).catch(error => {
      console.log('An error occurred while retrieving token. ', error);
    });
  }

  ngOnInit() {
    this._citiesServices.getCities();
  }
}
