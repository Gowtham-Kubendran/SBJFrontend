import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  value: any;
  url:any;
  seturl: string;
  producttype: string;

  productsData:any;

  constructor(private http:HttpClient) { 
    this.url = "https://us-central1-sbjbackend.cloudfunctions.net/user/metals";
    this.seturl = "https://us-central1-sbjbackend.cloudfunctions.net/user/metals";
  }

  getValue()
  {
    return this.value;
  }

  setValue(data)
  {
    this.value = data;
  }

  getPrices(): Observable<Price> {
   
    return this.http.get<Price>(this.url);
  }

  setPrices(price:Price): Observable<Price> {
   
    return this.http.post<Price>(this.seturl,price);
  }

  getLangs(): Observable<any> {
   
    return this.http.get("../../assets/langradio.json");
  }


  getProductType()
  {
return this.producttype
  }

 
 

   
 
}

export class Price{

  goldprice: number;
  silverprice: number;

  constructor()
  {
    this.goldprice = 0;
    this.silverprice = 0;
  }
}
