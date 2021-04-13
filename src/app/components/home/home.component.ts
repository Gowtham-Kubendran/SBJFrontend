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
  langlist = [];
  clicked = true;
  goldprice: number;
  silverprice: number;
  userdisable: boolean;
  showlang: any;
  counter: number;
  diaclick   : any;
  goldclick  : any;
  silverclick: any;
  // status: boolean;
  constructor(public ts:TranslateService,public sh:SharedService,public router: Router) { }
  aosInit()
  {
    AOS.init({
      duration:1200
    });
  }

 

  setLang()
  {
    if (window.sessionStorage.getItem('lang') == 'LA-TA') {
      // document.getElementById("butonid").style.left = "-9rem";
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
     
        (document.getElementById(`manlinkh1`) as HTMLInputElement).style.padding = "0 8px";
        (document.getElementById(`manlinkh2`) as HTMLInputElement).style.padding = "0 8px";
        (document.getElementById(`manlinkh3`) as HTMLInputElement).style.padding = "0 8px";
        (document.getElementById(`manlinkh4`) as HTMLInputElement).style.padding = "0 8px";
        (document.getElementById(`manlinkh5`) as HTMLInputElement).style.padding = "0 8px";
        document.getElementById("navbarnavid").style.marginLeft = "10%";
        document.getElementById("navdropdown1").style.marginLeft = "14%";
        document.getElementById("navdropdown2").style.marginLeft = "26%";
      }
     
      if (window.innerWidth < 800) {
     
        (document.getElementById(`manlinkh1`) as HTMLInputElement).style.padding = "0rem 1rem";
        (document.getElementById(`manlinkh2`) as HTMLInputElement).style.padding = "0rem 1rem";
        (document.getElementById(`manlinkh3`) as HTMLInputElement).style.padding = "0rem 1rem";
        (document.getElementById(`manlinkh4`) as HTMLInputElement).style.padding = "0rem 1rem";
        (document.getElementById(`manlinkh5`) as HTMLInputElement).style.padding = "0rem 1rem";
        document.getElementById("navbarnavid").style.marginLeft = "5%";
        document.getElementById("navdropdown1").style.marginLeft = "9%";
        document.getElementById("navdropdown2").style.marginLeft = "20%";

      }
    
 
        if (window.innerWidth < 500) {
     
          (document.getElementById(`manlinkh1`) as HTMLInputElement).style.padding = "2rem 0";
          (document.getElementById(`manlinkh2`) as HTMLInputElement).style.padding = "2rem 0";
          (document.getElementById(`manlinkh3`) as HTMLInputElement).style.padding = "2rem 0";
          (document.getElementById(`manlinkh4`) as HTMLInputElement).style.padding = "2rem 0";
          (document.getElementById(`manlinkh5`) as HTMLInputElement).style.padding = "2rem 0";
          document.getElementById("navbarnavid").style.marginLeft = "1%";
          document.getElementById("navdropdown1").style.marginLeft = "0%";
          document.getElementById("navdropdown2").style.marginLeft = "0%";
        }
        
     
     
    
      (document.getElementById("wrapper") as HTMLInputElement).style.fontFamily = "tamilf !important";
    }
    else {
      // document.getElementById("butonid").style.left = "-3rem";
      (document.getElementById(`manlinkh1`) as HTMLInputElement).style.padding = "10px 0 1rem 1rem";
      (document.getElementById(`manlinkh2`) as HTMLInputElement).style.padding = "10px 0 1rem 1rem";
      (document.getElementById(`manlinkh3`) as HTMLInputElement).style.padding = "10px 0 1rem 1rem";
      (document.getElementById(`manlinkh4`) as HTMLInputElement).style.padding = "10px 0 1rem 1rem";
      (document.getElementById(`manlinkh5`) as HTMLInputElement).style.padding = "10px 0 1rem 1rem";
      if (window.innerWidth < 2700)
      {
        document.getElementById("navbarnavid").style.marginLeft = "35%";
      }
      if (window.innerWidth < 1600) {
        document.getElementById("navbarnavid").style.marginLeft = "16%";
      }
      if (window.innerWidth < 1200) {
     
        (document.getElementById(`manlinkh1`) as HTMLInputElement).style.padding = "0rem 1rem";
        (document.getElementById(`manlinkh2`) as HTMLInputElement).style.padding = "0rem 1rem";
        (document.getElementById(`manlinkh3`) as HTMLInputElement).style.padding = "0rem 1rem";
        (document.getElementById(`manlinkh4`) as HTMLInputElement).style.padding = "0rem 1rem";
        (document.getElementById(`manlinkh5`) as HTMLInputElement).style.padding = "0rem 1rem";
        document.getElementById("navbarnavid").style.marginLeft = "11%";
        document.getElementById("navdropdown1").style.marginLeft = "15%";
        document.getElementById("navdropdown2").style.marginLeft = "28%";
      }
      if (window.innerWidth < 800) {
     
        document.getElementById("navbarnavid").style.marginLeft = "11%";
        document.getElementById("navdropdown1").style.marginLeft = "14%";
        document.getElementById("navdropdown2").style.marginLeft = "26%";
        
      }
      if (window.innerWidth < 500) {
     
        (document.getElementById(`manlinkh1`) as HTMLInputElement).style.padding = "2rem 0";
        (document.getElementById(`manlinkh2`) as HTMLInputElement).style.padding = "2rem 0";
        (document.getElementById(`manlinkh3`) as HTMLInputElement).style.padding = "2rem 0";
        (document.getElementById(`manlinkh4`) as HTMLInputElement).style.padding = "2rem 0";
        (document.getElementById(`manlinkh5`) as HTMLInputElement).style.padding = "2rem 0";
        document.getElementById("navdropdown1").style.marginLeft = "0%";
        document.getElementById("navdropdown2").style.marginLeft = "0%";
        document.getElementById("butonid").style.left = "3rem";
      }
    }
  }

  ngOnInit() {
    // this.status = false;
    this.diaclick   =0;
    this.goldclick  =0;
    this.silverclick=0;
    this.counter = 0;
    this.togglesclass();
    this.langlist = [{ key: 'LA-EN', value: 'English', checked: 'false' }, { key: 'LA-TA', value: 'தமிழ்', checked: 'false' }];
    
    if (window.sessionStorage.getItem('lang') == "LA-EN")
    {
      window.sessionStorage.setItem('lang', 'LA-EN');
      this.showlang = "EN";
      this.languageselect = "LA-EN";
      this.langlist[0].checked = 'true';
      this.langlist[1].checked = 'false';
    }
    else {
      this.showlang = "TA";
      this.languageselect = "LA-TA";
      this.langlist[1].checked = 'true';
      this.langlist[0].checked = 'false';
    }
   
    this.userdisable = true;
   
    if (window.innerWidth < 900)
    {
      $('#changedrop').attr("src", "../../../assets/images/languageiconb.svg");
      $('#marriagecoll').attr("src", "../../../assets/images/banners/collectionlandscape.jpg");
      }


      if (window.innerWidth < 600)
      {
        $('#heroone').attr("src", "../../../assets/images/mobilebanners/hero1mobile.jpg");
       
        $('#herotwo').attr("src", "../../../assets/images/mobilebanners/hero2mobile.jpg");
        $('#herothree').attr("src", "../../../assets/images/mobilebanners/hero3mobile.jpg");
        $('#herofour').attr("src", "../../../assets/images/mobilebanners/hero4mobile.jpg");
      
        }
  


      $(document).ready(function () {
        // $('.producthover').on("hover", function(e){
        //   $(this).next('ul').toggle();
        //   e.stopPropagation();
        //   e.preventDefault();
        // });
      //   $(".nav-link").hover(function(){
      //     var dropdownMenu = $(this).children(".dropdown-menu");
      //     if(dropdownMenu.is(":visible")){
      //         dropdownMenu.parent().toggleClass("open");
      //     }
      // });
     
    //   (<any>jQuery('.carousel')).carousel({
    //     interval: 6000,
    //     pause:true
    // });
    });
   

    this.sh.getPrices().subscribe(data => {
      this.goldprice=data.goldprice;
      this.silverprice = data.silverprice;
    });
    
  
    // this.sh.setAllProductsData();

    
    console.log(window.sessionStorage.getItem('lang'))
    if (window.sessionStorage.getItem('lang'))
    {
      this.ts.updateComp1Val(window.sessionStorage.getItem('lang'));
      console.log(window.sessionStorage.getItem('lang'))
      this.languageselect = window.sessionStorage.getItem('lang');
     
      this.setLang();
    }
  else {
    window.sessionStorage.setItem('lang', 'LA-EN');
    this.languageselect = 'LA-EN';
    }


    // this.router.events.subscribe((evt) => {
    //   if (!(evt instanceof NavigationEnd)) {
    //       return;
    //   }
    //   window.scrollTo(0, 0);
    // });
    window.scrollTo(0, 0);
    this.aosInit();
    this.togglesclass();
  }

  open(id)
  {
    document.getElementById('drop1').style.display = "none";
    document.getElementById('drop2').style.display = "none";
    document.getElementById('drop3').style.display = "none";
    document.getElementById('drop'+id).style.display = "block";
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
 
    this.togglesclass();
   
    
  
    
   
   
  }
  togglesclass()
  {
    $(window).scroll(function () {
      
      $('.navbar').toggleClass('scrolled', $(this).scrollTop() > 50);
     if ($(this).scrollTop() > 50) {
       $(".phoneicon").attr("src", "../../../assets/images/wicon.svg");
      
       $('#changedrop').attr("src", "../../../assets/images/languageiconb.svg");
     }
     else {

       $(".phoneicon").attr("src", "../../../assets/images/wiconw.png");
      
       $('#changedrop').attr("src", "../../../assets/images/languageiconw.svg");
       if (window.innerWidth < 900)
       {
         $('#changedrop').attr("src", "../../../assets/images/languageiconb.svg");
         }
     }
    
   });
  }

  getLang(data) {
    console.log(data);
    

    if (data == 'LA-TA') {
      this.showlang = 'TA';
      // document.getElementById("butonid").style.left = "-9rem";
      
      this.languageselect = "LA-TA";
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
     
        (document.getElementById(`manlinkh1`) as HTMLInputElement).style.padding = "0 8px";
        (document.getElementById(`manlinkh2`) as HTMLInputElement).style.padding = "0 8px";
        (document.getElementById(`manlinkh3`) as HTMLInputElement).style.padding = "0 8px";
        (document.getElementById(`manlinkh4`) as HTMLInputElement).style.padding = "0 8px";
        (document.getElementById(`manlinkh5`) as HTMLInputElement).style.padding = "0 8px";
        document.getElementById("navbarnavid").style.marginLeft = "10%";
        document.getElementById("navdropdown1").style.marginLeft = "14%";
        document.getElementById("navdropdown2").style.marginLeft = "26%";
      }
     
      if (window.innerWidth < 800) {
     
        (document.getElementById(`manlinkh1`) as HTMLInputElement).style.padding = "0rem 1rem";
        (document.getElementById(`manlinkh2`) as HTMLInputElement).style.padding = "0rem 1rem";
        (document.getElementById(`manlinkh3`) as HTMLInputElement).style.padding = "0rem 1rem";
        (document.getElementById(`manlinkh4`) as HTMLInputElement).style.padding = "0rem 1rem";
        (document.getElementById(`manlinkh5`) as HTMLInputElement).style.padding = "0rem 1rem";
        document.getElementById("navbarnavid").style.marginLeft = "5%";
        document.getElementById("navdropdown1").style.marginLeft = "9%";
        document.getElementById("navdropdown2").style.marginLeft = "20%";
      }
    
 
        if (window.innerWidth < 500) {
     
          (document.getElementById(`manlinkh1`) as HTMLInputElement).style.padding = "2rem 0";
          (document.getElementById(`manlinkh2`) as HTMLInputElement).style.padding = "2rem 0";
          (document.getElementById(`manlinkh3`) as HTMLInputElement).style.padding = "2rem 0";
          (document.getElementById(`manlinkh4`) as HTMLInputElement).style.padding = "2rem 0";
          (document.getElementById(`manlinkh5`) as HTMLInputElement).style.padding = "2rem 0";
          document.getElementById("navbarnavid").style.marginLeft = "1%";
          document.getElementById("navdropdown1").style.marginLeft = "0%";
          document.getElementById("navdropdown2").style.marginLeft = "0%";
        }
        
     
    
      (document.getElementById("wrapper") as HTMLInputElement).style.fontFamily = "tamilf !important";
    }
    else {
      this.showlang = 'EN';
      this.languageselect = "LA-EN";
      //
      (document.getElementById(`manlinkh1`) as HTMLInputElement).style.padding = "10px 0 1rem 1rem";
      (document.getElementById(`manlinkh2`) as HTMLInputElement).style.padding = "10px 0 1rem 1rem";
      (document.getElementById(`manlinkh3`) as HTMLInputElement).style.padding = "10px 0 1rem 1rem";
      (document.getElementById(`manlinkh4`) as HTMLInputElement).style.padding = "10px 0 1rem 1rem";
      (document.getElementById(`manlinkh5`) as HTMLInputElement).style.padding = "10px 0 1rem 1rem";
      if (window.innerWidth < 2700)
      {
        document.getElementById("navbarnavid").style.marginLeft = "35%";
      }
      if (window.innerWidth < 1600) {
        document.getElementById("navbarnavid").style.marginLeft = "16%";
      }
      if (window.innerWidth < 1200) {
     
        (document.getElementById(`manlinkh1`) as HTMLInputElement).style.padding = "0rem 1rem";
        (document.getElementById(`manlinkh2`) as HTMLInputElement).style.padding = "0rem 1rem";
        (document.getElementById(`manlinkh3`) as HTMLInputElement).style.padding = "0rem 1rem";
        (document.getElementById(`manlinkh4`) as HTMLInputElement).style.padding = "0rem 1rem";
        (document.getElementById(`manlinkh5`) as HTMLInputElement).style.padding = "0rem 1rem";
        document.getElementById("navbarnavid").style.marginLeft = "11%";
        document.getElementById("navdropdown1").style.marginLeft = "15%";
        document.getElementById("navdropdown2").style.marginLeft = "28%";
      }
      if (window.innerWidth < 800) {
     
        document.getElementById("navbarnavid").style.marginLeft = "11%";
        document.getElementById("navdropdown1").style.marginLeft = "14%";
        document.getElementById("navdropdown2").style.marginLeft = "26%";
      }
      if (window.innerWidth < 500) {
     
        (document.getElementById(`manlinkh1`) as HTMLInputElement).style.padding = "2rem 0";
        (document.getElementById(`manlinkh2`) as HTMLInputElement).style.padding = "2rem 0";
        (document.getElementById(`manlinkh3`) as HTMLInputElement).style.padding = "2rem 0";
        (document.getElementById(`manlinkh4`) as HTMLInputElement).style.padding = "2rem 0";
        (document.getElementById(`manlinkh5`) as HTMLInputElement).style.padding = "2rem 0";
        document.getElementById("navdropdown1").style.marginLeft = "0%";
        document.getElementById("navdropdown2").style.marginLeft = "0%";
        document.getElementById("butonid").style.left = "3rem";
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
    document.getElementById("wrapper").scrollTop -= 10;

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

  clearclicks()
  {
    this.diaclick = 0;
    this.goldclick = 0;
    this.silverclick = 0;
  }
  openMenu(metal)
  {
    if (metal == 'diamond')
    {
     
      document.getElementById('goldmenu').style.display = "none";
    document.getElementById('silvermenu').style.display = "none";
   document.getElementById('diamondmenu').style.display = "block";
      this.diaclick++;
      if (this.diaclick == 2)
      {
        document.getElementById('diamondmenu').style.display = "none";
        this.clearclicks();
        }
 
     
    }
    if (metal == 'gold')
    {
      
      document.getElementById('diamondmenu').style.display = "none";
      document.getElementById('silvermenu').style.display = "none";
      document.getElementById('goldmenu').style.display = "block";
    
      this.goldclick++;
      if (this.goldclick == 2)
      {
        document.getElementById('goldmenu').style.display = "none";
        this.clearclicks();
        }
  
    }
    if (metal == 'silver')
    {
     
      document.getElementById('diamondmenu').style.display = "none";
      document.getElementById('goldmenu').style.display = "none";
      document.getElementById('silvermenu').style.display = "block";
      this.silverclick++;
      if (this.silverclick == 2)
      {
        document.getElementById('silvermenu').style.display = "none";
        this.clearclicks();
        }
  
      }
  }

  hidesubmenus()
  {

    // this.status = !this.status;       
    document.getElementById('diamondmenu').style.display = "none";
    document.getElementById('goldmenu').style.display = "none";
    document.getElementById('silvermenu').style.display = "none";
    document.getElementById('navdropdown2').style.display = "none";


  }
  clearuser()
  {
    document.getElementById("user1").style.display = "none";
    document.getElementById("user2").style.display = "none";
    document.getElementById("user3").style.display = "none";
    document.getElementById("user4").style.display = "none";
  }
  toggleuser0(num)
  {
  
    if (num == 1)
    {
      this.clearuser();
      document.getElementById("prevuser0").style.background="#D0B96E";
      document.getElementById("nextuser0").style.backgroundColor = "#CC9F08";
      document.getElementById("user1").style.display = "block";
      document.getElementById("user2").style.display = "block";
     
    }
    if (num == 2)
    {
      this.clearuser();
      document.getElementById("nextuser0").style.background="#D0B96E";
      document.getElementById("prevuser0").style.backgroundColor = "#CC9F08";
      document.getElementById("user3").style.display = "block";
      document.getElementById("user4").style.display = "block";
    }
  }


  toggleuser(num)
  {
    if (num == 'prev')
      --this.counter;
    else
      ++this.counter;

    if (this.counter == 0)
    {
      this.clearuser();
      document.getElementById("prevuser").style.background="#D0B96E";
      document.getElementById("nextuser").style.backgroundColor = "#CC9F08";
      document.getElementById("user1").style.display = "block";
     
    }
    if (this.counter == 1)
      {
      this.clearuser();
      document.getElementById("nextuser").style.background="#CC9F08";
    document.getElementById("prevuser").style.backgroundColor = "#CC9F08";
      document.getElementById("user2").style.display = "block";
    
    }
    if (this.counter == 2)
    {
      this.clearuser();
      document.getElementById("nextuser").style.background="#CC9F08";
    document.getElementById("prevuser").style.backgroundColor = "#CC9F08";
    document.getElementById("user3").style.display = "block";
  
    }
    if (this.counter == 3)
    {
      this.clearuser();
    document.getElementById("nextuser").style.background="#D0B96E";
    document.getElementById("prevuser").style.backgroundColor = "#CC9F08";
    document.getElementById("user4").style.display = "block";
  
    }
  }

  hidetalk()
  {

  }

  showtalk()
  {

  }
  
}
