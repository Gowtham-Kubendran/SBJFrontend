import { Component, OnInit, Input } from '@angular/core';
import * as AOS from 'aos';
import { TranslateService } from 'src/app/services/translate/translate.service';
import { SharedService } from 'src/app/services/shared.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-talktous',
  templateUrl: './talktous.component.html',
  styleUrls: ['./talktous.component.scss']
})
export class TalktousComponent implements OnInit {

  @Input('talktouscontent')
  talktouscontent: any;
  lang: boolean;
  smallerscreen: boolean;

  constructor(public ts:TranslateService,public sh:SharedService,public route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    if (window.innerWidth < 700)
    {
      this.smallerscreen = true;
    }
    else
    {
      this.smallerscreen = false;
    }

    console.log(this.smallerscreen);
    this.lang=window.sessionStorage.getItem('lang')=="LA-TA"
    console.log(window.sessionStorage.getItem('lang')+" talk tous");
    this.ts.updateComp1Val(window.sessionStorage.getItem('lang'));

    if(window.sessionStorage.getItem('lang')=="LA-TA")
    (document.getElementById("talktousid") as HTMLInputElement).style.fontFamily = "tamilf !important";
    if (window.sessionStorage.getItem('lang') == "LA-EN")
      (document.getElementById("talktousid") as HTMLInputElement).style.fontFamily = "opR";
    this.aosInit();
    
    console.log(this.talktouscontent);
  }

  aosInit()
  {
    AOS.init({
      duration:1200
    });
  }

  goToPage(route)
  {
    this.router.navigate([route]);
  }
  
}
