import { Component, OnInit } from '@angular/core';
import { TranslateService } from 'src/app/services/translate/translate.service';
import { SharedService } from 'src/app/services/shared.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-todaysrate',
  templateUrl: './todaysrate.component.html',
  styleUrls: ['./todaysrate.component.scss']
})
export class TodaysrateComponent implements OnInit {

  getValue;

  price: Prices;
  flag: boolean;

  goldprice;
  silverprice;
  desktop: boolean;
  constructor(public ts:TranslateService,public sh:SharedService,public router: Router,public http:HttpClient) { }

  ngOnInit() {
    this.desktop = true;
    this.flag = true;
    if (window.innerWidth < 800)
    {
      this.desktop = false;
     }
   
    this.ts.updateComp1Val(window.sessionStorage.getItem('lang'));

    
      
    this.sh.getPrices().subscribe(data => {
      this.goldprice=data.goldprice;
      this.silverprice = data.silverprice;
    });
   
  }
  toggle()
  {
    if (this.flag == true) {
      document.getElementById("today1").style.display = "none";
      document.getElementById("close1").style.display = "block"
      document.getElementById("rate1").style.display = "block";
      this.flag = false;
    }
    else
    {
      document.getElementById("today1").style.display = "block";
      document.getElementById("close1").style.display = "none";
      document.getElementById("rate1").style.display = "none";
      this.flag = true;
      }
  }
  over()
  {
    document.getElementById('content').innerHTML = this.ts.translate('close');

  }
  
  out()
  {
    document.getElementById('content').innerHTML = this.ts.translate('todaysrate');
  }




}

class Prices
{
    goldprice;
    silverprice

}
