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

  goldprice;
  silverprice;
  constructor(private ts:TranslateService,private sh:SharedService,private router: Router,private http:HttpClient) { }

  ngOnInit() {

   
    this.ts.updateComp1Val(window.sessionStorage.getItem('lang'));

    
      
    this.sh.getPrices().subscribe(data => {
      this.goldprice=data.goldprice;
      this.silverprice = data.silverprice;
    });
   
  }
  toggleview()
  {
    if (document.getElementById('rate').style.display = "block")
      document.getElementById('rate').style.display = "none";
    else
      document.getElementById('rate').style.display = "block";
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
