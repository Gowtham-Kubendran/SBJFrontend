import { Component, OnInit, Input, HostListener } from '@angular/core';
import { TranslateService } from 'src/app/services/translate/translate.service';
import { Router } from '@angular/router';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  languageselect: string;
  langlist = ['LA-EN', 'LA-TA'];
 

 
  constructor(private ts:TranslateService,private sh:SharedService,private router: Router) { }

  setLang()
  {
    if (window.sessionStorage.getItem('lang') == 'LA-TA') {
      if (window.innerWidth < 2700)
      {
        document.getElementById("navbarnavid").style.marginLeft = "35%";
      }
      if (window.innerWidth < 1600)
      {
        document.getElementById("navbarnavid").style.marginLeft = "15%";
      }
      if (window.innerWidth < 1500)
      {
        document.getElementById("navbarnavid").style.marginLeft = "9%";
        }
      if (window.innerWidth < 1200) {
     
        (document.getElementById(`navlink1`) as HTMLInputElement).style.padding = "0rem 0.5rem";
        (document.getElementById(`navlink2`) as HTMLInputElement).style.padding = "0rem 0.5rem";
        (document.getElementById(`navlink3`) as HTMLInputElement).style.padding = "0rem 0.5rem";
        (document.getElementById(`navlink4`) as HTMLInputElement).style.padding = "0rem 0.5rem";
        (document.getElementById(`navlink5`) as HTMLInputElement).style.padding = "0rem 0.5rem";
        document.getElementById("navbarnavid").style.marginLeft = "6%";
      }
     
      if (window.innerWidth < 800) {
     
        (document.getElementById(`navlink1`) as HTMLInputElement).style.padding = "0rem 1rem";
        (document.getElementById(`navlink2`) as HTMLInputElement).style.padding = "0rem 1rem";
        (document.getElementById(`navlink3`) as HTMLInputElement).style.padding = "0rem 1rem";
        (document.getElementById(`navlink4`) as HTMLInputElement).style.padding = "0rem 1rem";
        (document.getElementById(`navlink5`) as HTMLInputElement).style.padding = "0rem 1rem";
        document.getElementById("navbarnavid").style.marginLeft = "5%";
      }
    
 
        if (window.innerWidth < 500) {
     
          (document.getElementById(`navlink1`) as HTMLInputElement).style.padding = "1rem 0";
          (document.getElementById(`navlink2`) as HTMLInputElement).style.padding = "1rem 0";
          (document.getElementById(`navlink3`) as HTMLInputElement).style.padding = "1rem 0";
          (document.getElementById(`navlink4`) as HTMLInputElement).style.padding = "1rem 0";
          (document.getElementById(`navlink5`) as HTMLInputElement).style.padding = "1rem 0";
          document.getElementById("navbarnavid").style.marginLeft = "1%";
        }
        
     
     
     
     
    
      (document.getElementById("wrapper") as HTMLInputElement).style.fontFamily = "tamilf !important";
    }
    else {
        
      (document.getElementById(`navlink1`) as HTMLInputElement).style.padding = "10px 1rem 1rem";
      (document.getElementById(`navlink2`) as HTMLInputElement).style.padding = "10px 1rem 1rem";
      (document.getElementById(`navlink3`) as HTMLInputElement).style.padding = "10px 1rem 1rem";
      (document.getElementById(`navlink4`) as HTMLInputElement).style.padding = "10px 1rem 1rem";
      (document.getElementById(`navlink5`) as HTMLInputElement).style.padding = "10px 1rem 1rem";
      document.getElementById("navbarnavid").style.marginLeft = "11%";
      if (window.innerWidth < 2700)
      {
        document.getElementById("navbarnavid").style.marginLeft = "35%";
      }
      if (window.innerWidth < 1600)
      {
        document.getElementById("navbarnavid").style.marginLeft = "15%";
        }

      if (window.innerWidth < 1200) {
        (document.getElementById(`navlink1`) as HTMLInputElement).style.padding = "10px 1rem 1rem";
        (document.getElementById(`navlink2`) as HTMLInputElement).style.padding = "10px 1rem 1rem";
        (document.getElementById(`navlink3`) as HTMLInputElement).style.padding = "10px 1rem 1rem";
        (document.getElementById(`navlink4`) as HTMLInputElement).style.padding = "10px 1rem 1rem";
        (document.getElementById(`navlink5`) as HTMLInputElement).style.padding = "10px 1rem 1rem";
        document.getElementById("navbarnavid").style.marginLeft = "13%";
      }
      if (window.innerWidth < 800) {
        (document.getElementById(`navlink1`) as HTMLInputElement).style.padding = "10px 1rem 1rem";
        (document.getElementById(`navlink2`) as HTMLInputElement).style.padding = "10px 1rem 1rem";
        (document.getElementById(`navlink3`) as HTMLInputElement).style.padding = "10px 1rem 1rem";
        (document.getElementById(`navlink4`) as HTMLInputElement).style.padding = "10px 1rem 1rem";
        (document.getElementById(`navlink5`) as HTMLInputElement).style.padding = "10px 1rem 1rem";
        document.getElementById("navbarnavid").style.marginLeft = "10%";
      }
      if (window.innerWidth < 500) {
     
        (document.getElementById(`navlink1`) as HTMLInputElement).style.padding = "1rem 0";
        (document.getElementById(`navlink2`) as HTMLInputElement).style.padding = "1rem 0";
        (document.getElementById(`navlink3`) as HTMLInputElement).style.padding = "1rem 0";
        (document.getElementById(`navlink4`) as HTMLInputElement).style.padding = "1rem 0";
        (document.getElementById(`navlink5`) as HTMLInputElement).style.padding = "1rem 0";
        document.getElementById("navbarnavid").style.marginLeft = "1%";
      }
      

    }
  }
  
  ngOnInit() {
    if (window.sessionStorage.getItem('lang') == "EN")
    {
      window.sessionStorage.setItem('lang','LA-EN');
      }
    console.log(window.sessionStorage.getItem('lang'))
    if (window.sessionStorage.getItem('lang'))
    {
      this.ts.updateComp1Val(window.sessionStorage.getItem('lang'));
      console.log(window.sessionStorage.getItem('lang'))
      this.languageselect = window.sessionStorage.getItem('lang');
      console.log(this.languageselect+" selected");
      this.setLang();
    }
  else {
    window.sessionStorage.setItem('lang', 'LA-EN');
    this.languageselect = 'LA-EN';
    }

    (document.getElementById("language") as HTMLInputElement).style.color = "#000";
    
    
  }
  getLang(data) {
    console.log(data);
    if (data == 'LA-TA') {
      if (window.innerWidth < 2700)
      {
        document.getElementById("navbarnavid").style.marginLeft = "35%";
      }
      if (window.innerWidth < 1600)
      {
        document.getElementById("navbarnavid").style.marginLeft = "15%";
      }
      if (window.innerWidth < 1500)
      {
        document.getElementById("navbarnavid").style.marginLeft = "9%";
        }
      if (window.innerWidth < 1200) {
     
        (document.getElementById(`navlink1`) as HTMLInputElement).style.padding = "0rem 0.5rem";
        (document.getElementById(`navlink2`) as HTMLInputElement).style.padding = "0rem 0.5rem";
        (document.getElementById(`navlink3`) as HTMLInputElement).style.padding = "0rem 0.5rem";
        (document.getElementById(`navlink4`) as HTMLInputElement).style.padding = "0rem 0.5rem";
        (document.getElementById(`navlink5`) as HTMLInputElement).style.padding = "0rem 0.5rem";
        document.getElementById("navbarnavid").style.marginLeft = "6%";
      }
      if (window.innerWidth < 800) {
     
        (document.getElementById(`navlink1`) as HTMLInputElement).style.padding = "0rem 1rem";
        (document.getElementById(`navlink2`) as HTMLInputElement).style.padding = "0rem 1rem";
        (document.getElementById(`navlink3`) as HTMLInputElement).style.padding = "0rem 1rem";
        (document.getElementById(`navlink4`) as HTMLInputElement).style.padding = "0rem 1rem";
        (document.getElementById(`navlink5`) as HTMLInputElement).style.padding = "0rem 1rem";
        document.getElementById("navbarnavid").style.marginLeft = "5%";
      }
      if (window.innerWidth < 500) {
     
        (document.getElementById(`navlink1`) as HTMLInputElement).style.padding = "2rem 0";
        (document.getElementById(`navlink2`) as HTMLInputElement).style.padding = "2rem 0";
        (document.getElementById(`navlink3`) as HTMLInputElement).style.padding = "2rem 0";
        (document.getElementById(`navlink4`) as HTMLInputElement).style.padding = "2rem 0";
        (document.getElementById(`navlink5`) as HTMLInputElement).style.padding = "2rem 0";
        document.getElementById("navbarnavid").style.marginLeft = "1%";
      }
    
    
    }
    else {
      (document.getElementById(`navlink1`) as HTMLInputElement).style.padding = "10px 1rem 1rem";
      (document.getElementById(`navlink2`) as HTMLInputElement).style.padding = "10px 1rem 1rem";
      (document.getElementById(`navlink3`) as HTMLInputElement).style.padding = "10px 1rem 1rem";
      (document.getElementById(`navlink4`) as HTMLInputElement).style.padding = "10px 1rem 1rem";
      (document.getElementById(`navlink5`) as HTMLInputElement).style.padding = "10px 1rem 1rem";
      document.getElementById("navbarnavid").style.marginLeft = "11%";
      if (window.innerWidth < 2700)
      {
        document.getElementById("navbarnavid").style.marginLeft = "35%";
      }
      if (window.innerWidth < 1600)
      {
        document.getElementById("navbarnavid").style.marginLeft = "15%";
      }
      if (window.innerWidth < 1200) {
        (document.getElementById(`navlink1`) as HTMLInputElement).style.padding = "10px 1rem 1rem";
        (document.getElementById(`navlink2`) as HTMLInputElement).style.padding = "10px 1rem 1rem";
        (document.getElementById(`navlink3`) as HTMLInputElement).style.padding = "10px 1rem 1rem";
        (document.getElementById(`navlink4`) as HTMLInputElement).style.padding = "10px 1rem 1rem";
        (document.getElementById(`navlink5`) as HTMLInputElement).style.padding = "10px 1rem 1rem";
        document.getElementById("navbarnavid").style.marginLeft = "13%";
      }
      if (window.innerWidth < 800) {
        (document.getElementById(`navlink1`) as HTMLInputElement).style.padding = "10px 1rem 1rem";
        (document.getElementById(`navlink2`) as HTMLInputElement).style.padding = "10px 1rem 1rem";
        (document.getElementById(`navlink3`) as HTMLInputElement).style.padding = "10px 1rem 1rem";
        (document.getElementById(`navlink4`) as HTMLInputElement).style.padding = "10px 1rem 1rem";
        (document.getElementById(`navlink5`) as HTMLInputElement).style.padding = "10px 1rem 1rem";
        document.getElementById("navbarnavid").style.marginLeft = "10%";
      }

      if (window.innerWidth < 500) {
     
        (document.getElementById(`navlink1`) as HTMLInputElement).style.padding = "1rem 0";
        (document.getElementById(`navlink2`) as HTMLInputElement).style.padding = "1rem 0";
        (document.getElementById(`navlink3`) as HTMLInputElement).style.padding = "1rem 0";
        (document.getElementById(`navlink4`) as HTMLInputElement).style.padding = "1rem 0";
        (document.getElementById(`navlink5`) as HTMLInputElement).style.padding = "1rem 0";
        document.getElementById("navbarnavid").style.marginLeft = "1%";
      }
      

    }
    this.ts.updateComp1Val(data);
    window.sessionStorage.setItem('lang', data);
    


    console.log(data);
    this.ts.updateComp1Val(data);
    window.sessionStorage.setItem('lang', data);
     
  }
  goToProducts(types,metals)
  {
    (document.getElementById("collapsebut") as HTMLInputElement).click();
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
 
  myFunction()
  {
    var x = document.getElementById("myTopnav") as HTMLInputElement;
    var logo = document.getElementById("logo") as HTMLInputElement;
    console.log(x.className);
    if (x.className === "topnav" || x.className === "topnav scrolled") {
      if (x.className === "topnav") {
        x.className += " scrolled";
      }
     x.className += " responsive"; 
     
     x.style.height = "auto";
     
     logo.style.display = "none";
   } else {
     x.className = "topnav";
     x.className += " scrolled";
     logo.style.display = "block";
     x.style.height = "7em";
     
     
   }
  }
  
  
}
