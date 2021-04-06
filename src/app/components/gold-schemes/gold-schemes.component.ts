import { Component, OnInit } from '@angular/core';
import { TranslateService } from 'src/app/services/translate/translate.service';
import { SharedService } from 'src/app/services/shared.service';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-gold-schemes',
  templateUrl: './gold-schemes.component.html',
  styleUrls: ['./gold-schemes.component.scss']
})
export class GoldSchemesComponent implements OnInit {

  constructor(private ts:TranslateService,private sh:SharedService,private router: Router) { }

  clearcolor()
  {
    document.getElementById("navlink1").style.color = "#000";
    document.getElementById("navlink2").style.color = "#000";
    document.getElementById("navlink3").style.color = "#000";
    document.getElementById("navlink4").style.color = "#000";
    document.getElementById("navlink5").style.color = "#000";
  }
  ngOnInit() {
    this.clearcolor();
    document.getElementById("navlink3").style.color = "#CC9F08";
    this.ts.updateComp1Val(window.sessionStorage.getItem('lang'));

    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
          return;
      }
      window.scrollTo(0, 0)
  });
  }
  goToPage(route)
  {
    this.router.navigate([route]);
  }



}
