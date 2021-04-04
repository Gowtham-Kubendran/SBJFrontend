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
    this.url = "https://sbjbackend.herokuapp.com/getValue";
    this.seturl = "https://sbjbackend.herokuapp.com/setValue";
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

  getProductType()
  {
return this.producttype
  }

  setProductType(value)
  {
    this.producttype = value;
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
