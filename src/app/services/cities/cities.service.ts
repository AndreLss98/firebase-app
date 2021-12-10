import { Injectable } from '@angular/core';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';

@Injectable({
  providedIn: 'root'
})
export class CitiesService {

  constructor() {

  }

  async getCities() {
    const db = getFirestore();
    const citiesCol = collection(db, 'cities');
    const citySnapshot = await getDocs(citiesCol);
    const cityList = citySnapshot.docs.map(doc => doc.data());
    console.log(cityList);
    return cityList;
  }

}
