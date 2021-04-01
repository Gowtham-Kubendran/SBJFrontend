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

  ngOnInit() {
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
