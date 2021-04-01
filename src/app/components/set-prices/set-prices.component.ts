import { Component, OnInit } from '@angular/core';
import { TranslateService } from 'src/app/services/translate/translate.service';
import { SharedService, Price } from 'src/app/services/shared.service';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-set-prices',
  templateUrl: './set-prices.component.html',
  styleUrls: ['./set-prices.component.scss']
})
export class SetPricesComponent implements OnInit {

  prices: Price=new Price();
  goldprice=0;
  silverprice=0;
  constructor(private ts:TranslateService,private sh:SharedService,private snackBar: MatSnackBar) { }

  ngOnInit() {
    this.prices=new Price();
  }
  setPrice()
  {
    this.prices.goldprice =   this.goldprice;
    this.prices.silverprice = this.silverprice;
    this.sh.setPrices(this.prices).subscribe(data => {
      console.log("set Successfull");
      this.goldprice = 0;
      this.silverprice = 0;
      this.snackBar.open("prices set","close", {
        duration: 5000,
      });
    })
  }
}
