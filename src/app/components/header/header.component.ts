import { Component, OnInit, Input, HostListener } from '@angular/core';
import { TranslateService } from 'src/app/services/translate/translate.service';
import { Router } from '@angular/router';
import { SharedService } from 'src/app/services/shared.service';
import { Observable } from 'rxjs';
import { HttpBackend } from '@angular/common/http';
import { MatButtonToggleGroupMultiple } from '@angular/material';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  
  langlist1 = [{ key: 'LA-EN', value: 'English' , checked:false},{key:'LA-TA',value:'தமிழ்' , checked:false}];
  languageselect = 'LA-EN';
  showlang;
 

 
  constructor(public ts:TranslateService,public sh:SharedService,public router: Router) { }

 
    
  
  
  ngOnInit() {
    this.ts.updateComp1Val(window.sessionStorage.getItem('lang'));
    console.log(window.sessionStorage.getItem('lang'));
    this.languageselect = window.sessionStorage.getItem('lang');
    // (document.getElementById("language") as HTMLInputElement).style.color = "#000";


    this.getInitLang();
    
    
  }

  getInitLang()
  {
    this.ts.updateComp1Val(window.sessionStorage.getItem('lang'));
    if (window.sessionStorage.getItem('lang') == "LA-TA") {
      this.showlang = "TA";
    }
    else
    {
      this.showlang = "EN";
      }
  }
 


  
  checkProducts()
  {
    if (this.router.url.charAt(1)=='p')
    return true;
  else
    return false;
  }
  checkcollection()
  {
    if (this.router.url == '/collections')
    return true;
  else
    return false;
  }
  checkGoldScheme()
  {
    if (this.router.url.charAt(1)=='g')
    return true;
  else
    return false;
  }
  checkAboutus()
  {
    if (this.router.url == '/aboutus')
      return true;
    else
      return false;
      
  }
  checkcontuctus()
  {
    if (this.router.url == '/contactus')
    return true;
  else
    return false;
  }
  
  

  getLang(data) {
    if (data == 'LA-TA') {
      this.showlang = 'TA';
      this.languageselect = "LA-TA";
    }
    else {
      this.showlang = 'EN';
      this.languageselect = "LA-EN";
    }
    this.ts.updateComp1Val(data);
    window.sessionStorage.setItem('lang', data);
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
