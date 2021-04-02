import { Component, OnInit, HostListener, ViewEncapsulation } from '@angular/core';
import { TranslateService } from 'src/app/services/translate/translate.service';
import * as $ from 'jquery' 
import { SharedService } from 'src/app/services/shared.service';
import { Router, NavigationEnd } from '@angular/router';
import * as AOS from 'aos';
import { HttpParams } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  languageselect;
  list: any = [];
  langlist = ['LA-EN', 'LA-TA'];
  clicked = true;
  goldprice: number;
  silverprice: number;
  constructor(private ts:TranslateService,private sh:SharedService,private router: Router) { }
  aosInit()
  {
    AOS.init({
      duration:1200
    });
  }

  setLang()
  {
    if (window.sessionStorage.getItem('lang') == 'LA-TA') {
      console.log(window.innerWidth);
      if (window.innerWidth < 2700 )
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
     
        (document.getElementById(`navlink1`) as HTMLInputElement).style.padding = "0rem";
        (document.getElementById(`navlink2`) as HTMLInputElement).style.padding = "0rem";
        (document.getElementById(`navlink3`) as HTMLInputElement).style.padding = "0rem";
        (document.getElementById(`navlink4`) as HTMLInputElement).style.padding = "0rem";
        (document.getElementById(`navlink5`) as HTMLInputElement).style.padding = "0rem";
        document.getElementById("navbarnavid").style.marginLeft = "10%";
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
     
      (document.getElementById(`navlink1`) as HTMLInputElement).style.padding = "10px 0 1rem 1rem";
      (document.getElementById(`navlink2`) as HTMLInputElement).style.padding = "10px 0 1rem 1rem";
      (document.getElementById(`navlink3`) as HTMLInputElement).style.padding = "10px 0 1rem 1rem";
      (document.getElementById(`navlink4`) as HTMLInputElement).style.padding = "10px 0 1rem 1rem";
      (document.getElementById(`navlink5`) as HTMLInputElement).style.padding = "10px 0 1rem 1rem";
      if (window.innerWidth < 2700)
      {
        document.getElementById("navbarnavid").style.marginLeft = "35%";
      }
      if (window.innerWidth < 1600) {
        document.getElementById("navbarnavid").style.marginLeft = "15%";
      }
      if (window.innerWidth < 1200) {
     
        (document.getElementById(`navlink1`) as HTMLInputElement).style.padding = "0rem 1rem";
        (document.getElementById(`navlink2`) as HTMLInputElement).style.padding = "0rem 1rem";
        (document.getElementById(`navlink3`) as HTMLInputElement).style.padding = "0rem 1rem";
        (document.getElementById(`navlink4`) as HTMLInputElement).style.padding = "0rem 1rem";
        (document.getElementById(`navlink5`) as HTMLInputElement).style.padding = "0rem 1rem";
        document.getElementById("navbarnavid").style.marginLeft = "11%";
      }
      if (window.innerWidth < 800) {
     
        document.getElementById("navbarnavid").style.marginLeft = "11%";
      }
      if (window.innerWidth < 500) {
     
        (document.getElementById(`navlink1`) as HTMLInputElement).style.padding = "1rem 0";
        (document.getElementById(`navlink2`) as HTMLInputElement).style.padding = "1rem 0";
        (document.getElementById(`navlink3`) as HTMLInputElement).style.padding = "1rem 0";
        (document.getElementById(`navlink4`) as HTMLInputElement).style.padding = "1rem 0";
        (document.getElementById(`navlink5`) as HTMLInputElement).style.padding = "1rem 0";
      }
    }
  }

  ngOnInit() {


    $(document).ready(function () {
     
      (<any>jQuery('.carousel')).carousel({
        interval: 3000
    });
    });
   

    this.sh.getPrices().subscribe(data => {
      this.goldprice=data.goldprice;
      this.silverprice = data.silverprice;
    });
    
  
    // this.sh.setAllProductsData();

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


    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
          return;
      }
      window.scrollTo(0, 0)
  });
    this.aosInit();
  }
  showprev()
  {
    (document.getElementById("prevbut") as HTMLInputElement).style.opacity = "1";
  }

  
  ngAfterViewInit() {
    $('.carousel-showmanymoveone .item').each(function(){
      var itemToClone = $(this);
  
      for (var i=1;i<6;i++) {
        itemToClone = itemToClone.next();
  
        // wrap around if at end of item collection
        if (!itemToClone.length) {
          itemToClone = $(this).siblings(':first');
        }
  
        // grab item, clone, add marker class, add to collection
        itemToClone.children(':first-child').clone()
          .addClass("cloneditem-"+(i))
          .appendTo($(this));
      }
    });
 
   
      $(window).scroll(function () {
      
         $('.navbar').toggleClass('scrolled', $(this).scrollTop() > 50);
         if ($(this).scrollTop() > 50)
         $(".phoneicon").attr("src", "../../../assets/images/wicon.svg");
      else
         $(".phoneicon").attr("src", "../../../assets/images/wiconw.png"); 
       
      });
  
    
   
   
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
     
        (document.getElementById(`navlink1`) as HTMLInputElement).style.padding = "0rem";
        (document.getElementById(`navlink2`) as HTMLInputElement).style.padding = "0rem";
        (document.getElementById(`navlink3`) as HTMLInputElement).style.padding = "0rem";
        (document.getElementById(`navlink4`) as HTMLInputElement).style.padding = "0rem";
        (document.getElementById(`navlink5`) as HTMLInputElement).style.padding = "0rem";
        document.getElementById("navbarnavid").style.marginLeft = "10%";
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
        
      (document.getElementById(`navlink1`) as HTMLInputElement).style.padding = "10px 0 1rem 1rem";
      (document.getElementById(`navlink2`) as HTMLInputElement).style.padding = "10px 0 1rem 1rem";
      (document.getElementById(`navlink3`) as HTMLInputElement).style.padding = "10px 0 1rem 1rem";
      (document.getElementById(`navlink4`) as HTMLInputElement).style.padding = "10px 0 1rem 1rem";
      (document.getElementById(`navlink5`) as HTMLInputElement).style.padding = "10px 0 1rem 1rem";
      if (window.innerWidth < 2700)
      {
        document.getElementById("navbarnavid").style.marginLeft = "35%";
      }
      if (window.innerWidth < 1600) {
        document.getElementById("navbarnavid").style.marginLeft = "15%";
      }
      if (window.innerWidth < 1200) {
     
        (document.getElementById(`navlink1`) as HTMLInputElement).style.padding = "0rem 1rem";
        (document.getElementById(`navlink2`) as HTMLInputElement).style.padding = "0rem 1rem";
        (document.getElementById(`navlink3`) as HTMLInputElement).style.padding = "0rem 1rem";
        (document.getElementById(`navlink4`) as HTMLInputElement).style.padding = "0rem 1rem";
        (document.getElementById(`navlink5`) as HTMLInputElement).style.padding = "0rem 1rem";
        document.getElementById("navbarnavid").style.marginLeft = "11%";
      }
      if (window.innerWidth < 800) {
     
        document.getElementById("navbarnavid").style.marginLeft = "11%";
      }
      if (window.innerWidth < 500) {
     
        (document.getElementById(`navlink1`) as HTMLInputElement).style.padding = "1rem 0";
        (document.getElementById(`navlink2`) as HTMLInputElement).style.padding = "1rem 0";
        (document.getElementById(`navlink3`) as HTMLInputElement).style.padding = "1rem 0";
        (document.getElementById(`navlink4`) as HTMLInputElement).style.padding = "1rem 0";
        (document.getElementById(`navlink5`) as HTMLInputElement).style.padding = "1rem 0";
      }

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
  scrollToproducts()
  {
    document.getElementById("productsec").scrollIntoView();

  }
  toggleDrop()
  {
    $("nav ul li ul").fadeToggle(500);
  }
 
  
  function(){
    $('.carousel-showmanymoveone .item').each(function(){
      var itemToClone = $(this);
  
      for (var i=1;i<6;i++) {
        itemToClone = itemToClone.next();
  
        // wrap around if at end of item collection
        if (!itemToClone.length) {
          itemToClone = $(this).siblings(':first');
        }
  
        // grab item, clone, add marker class, add to collection
        itemToClone.children(':first-child').clone()
          .addClass("cloneditem-"+(i))
          .appendTo($(this));
      }
    });
  };


}
