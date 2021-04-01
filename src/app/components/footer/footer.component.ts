import { Component, OnInit } from '@angular/core';
import { TranslateService } from 'src/app/services/translate/translate.service';
import { SharedService } from 'src/app/services/shared.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor(private ts:TranslateService,private sh:SharedService,private router: Router) { }

  ngOnInit() {
    this.ts.updateComp1Val(window.sessionStorage.getItem('lang'));

  }
  goToProducts(types,metals)
  {
    this.sh.setValue(types);
   this.router.navigate(['products',metals]);
  }

  goToCollections(data)
  {
    this.sh.setValue(data);
    this.router.navigate(['collections']);
  }
  goToPage(route)
  {
    this.router.navigate([route]);
  }
 
}
