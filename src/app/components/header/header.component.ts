import { Component, OnInit, Input, HostListener } from '@angular/core';
import { TranslateService } from 'src/app/services/translate/translate.service';
import { Router } from '@angular/router';
import { SharedService } from 'src/app/services/shared.service';
import { Observable } from 'rxjs';
import { HttpBackend } from '@angular/common/http';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  languageselect: string;
  langlist1 = [{ key: 'LA-EN', value: 'English' , checked:false},{key:'LA-TA',value:'தமிழ்' , checked:false}];
  showlang: string;
 

 
  constructor(public ts:TranslateService,public sh:SharedService,public router: Router) { }

  setLang()
  {
    if (window.sessionStorage.getItem('lang') == 'LA-TA') {
      if (window.innerWidth < 2700)
      {
        document.getElementById("navbarnavid").style.marginLeft = "35%";
        document.getElementById("navdropdown1").style.marginLeft = "35%";
      }
      if (window.innerWidth < 1600)
      {
        document.getElementById("navbarnavid").style.marginLeft = "15%";
        document.getElementById("navdropdown1").style.marginLeft = "18%";
        document.getElementById("navdropdown2").style.marginLeft = "30%";
      
      }
      if (window.innerWidth < 1500)
      {
        document.getElementById("navbarnavid").style.marginLeft = "9%";
        document.getElementById("navdropdown1").style.marginLeft = "13%";
        document.getElementById("navdropdown2").style.marginLeft = "25%";
        }
      if (window.innerWidth < 1300) {
     
        (document.getElementById(`navlink1`) as HTMLInputElement).style.padding = "0rem 0";
        (document.getElementById(`navlink2`) as HTMLInputElement).style.padding = "0rem 0";
        (document.getElementById(`navlink3`) as HTMLInputElement).style.padding = "0rem 0";
        (document.getElementById(`navlink4`) as HTMLInputElement).style.padding = "0rem 0";
        (document.getElementById(`navlink5`) as HTMLInputElement).style.padding = "0rem 0";
        document.getElementById("navbarnavid").style.marginLeft = "6%";
        document.getElementById("navdropdown1").style.marginLeft = "11%";
        document.getElementById("navdropdown2").style.marginLeft = "23%";
      }
     
      if (window.innerWidth < 800) {
     
        (document.getElementById(`navlink1`) as HTMLInputElement).style.padding = "0rem 1rem";
        (document.getElementById(`navlink2`) as HTMLInputElement).style.padding = "0rem 1rem";
        (document.getElementById(`navlink3`) as HTMLInputElement).style.padding = "0rem 1rem";
        (document.getElementById(`navlink4`) as HTMLInputElement).style.padding = "0rem 1rem";
        (document.getElementById(`navlink5`) as HTMLInputElement).style.padding = "0rem 1rem";
        document.getElementById("navbarnavid").style.marginLeft = "5%";
        document.getElementById("navdropdown1").style.marginLeft = "9%";
        document.getElementById("navdropdown2").style.marginLeft = "20%";
      }
    
 
        if (window.innerWidth < 500) {
     
          (document.getElementById(`navlink1`) as HTMLInputElement).style.padding = "2rem 0";
          (document.getElementById(`navlink2`) as HTMLInputElement).style.padding = "2rem 0";
          (document.getElementById(`navlink3`) as HTMLInputElement).style.padding = "2rem 0";
          (document.getElementById(`navlink4`) as HTMLInputElement).style.padding = "2rem 0";
          (document.getElementById(`navlink5`) as HTMLInputElement).style.padding = "2rem 0";
          document.getElementById("navbarnavid").style.marginLeft = "1%";
          document.getElementById("navdropdown1").style.marginLeft = "0";
        document.getElementById("navdropdown2").style.marginLeft = "0";
        }
        
     
     
     
     
    
      (document.getElementById("wrapper") as HTMLInputElement).style.fontFamily = "tamilf !important";
    }
    else {
        
      (document.getElementById(`navlink1`) as HTMLInputElement).style.padding = "10px 0px";
      (document.getElementById(`navlink2`) as HTMLInputElement).style.padding = "10px 0px";
      (document.getElementById(`navlink3`) as HTMLInputElement).style.padding = "10px 0px";
      (document.getElementById(`navlink4`) as HTMLInputElement).style.padding = "10px 0px";
      (document.getElementById(`navlink5`) as HTMLInputElement).style.padding = "10px 0px";
      document.getElementById("navbarnavid").style.marginLeft = "11%";
      if (window.innerWidth < 2700)
      {
        document.getElementById("navbarnavid").style.marginLeft = "35%";
      }
      if (window.innerWidth < 1600)
      {
        document.getElementById("navbarnavid").style.marginLeft = "21%";
        document.getElementById("navdropdown1").style.marginLeft = "24%";
        document.getElementById("navdropdown2").style.marginLeft = "36%";
        }

      if (window.innerWidth < 1200) {
        (document.getElementById(`navlink1`) as HTMLInputElement).style.padding = "10px 0px";
        (document.getElementById(`navlink2`) as HTMLInputElement).style.padding = "10px 0px";
        (document.getElementById(`navlink3`) as HTMLInputElement).style.padding = "10px 0px";
        (document.getElementById(`navlink4`) as HTMLInputElement).style.padding = "10px 0px";
        (document.getElementById(`navlink5`) as HTMLInputElement).style.padding = "10px 0px";
        document.getElementById("navbarnavid").style.marginLeft = "13%";
        document.getElementById("navdropdown1").style.marginLeft = "17%";
        document.getElementById("navdropdown2").style.marginLeft = "30%";
      }
      if (window.innerWidth < 800) {
        (document.getElementById(`navlink1`) as HTMLInputElement).style.padding = "10px 1rem 1rem";
        (document.getElementById(`navlink2`) as HTMLInputElement).style.padding = "10px 1rem 1rem";
        (document.getElementById(`navlink3`) as HTMLInputElement).style.padding = "10px 1rem 1rem";
        (document.getElementById(`navlink4`) as HTMLInputElement).style.padding = "10px 1rem 1rem";
        (document.getElementById(`navlink5`) as HTMLInputElement).style.padding = "10px 1rem 1rem";
        document.getElementById("navbarnavid").style.marginLeft = "10%";
        document.getElementById("navdropdown1").style.marginLeft = "14%";
        document.getElementById("navdropdown2").style.marginLeft = "26%";
      }
      if (window.innerWidth < 500) {
     
        (document.getElementById(`navlink1`) as HTMLInputElement).style.padding = "2rem 0";
        (document.getElementById(`navlink2`) as HTMLInputElement).style.padding = "2rem 0";
        (document.getElementById(`navlink3`) as HTMLInputElement).style.padding = "2rem 0";
        (document.getElementById(`navlink4`) as HTMLInputElement).style.padding = "2rem 0";
        (document.getElementById(`navlink5`) as HTMLInputElement).style.padding = "2rem 0";
        document.getElementById("navbarnavid").style.marginLeft = "1%";
        document.getElementById("navdropdown1").style.marginLeft = "0";
        document.getElementById("navdropdown2").style.marginLeft = "0";
      }
      

    }
  }

  
  
  ngOnInit() {

    

    if (window.sessionStorage.getItem('lang')=="LA-EN")
    {
      this.showlang = "EN";
      this.langlist1[0].checked = true;
      this.languageselect = "LA-EN";
  
    }
    else {
      this.showlang = "TA"
      this.langlist1[1].checked = true;
      this.languageselect = "LA-TA";
    }

    $(document).ready(function () {
      $('.dropdown-submenu a.test').on("click", function (e) {
        $(this).next('ul').toggle();
        e.stopPropagation();
        e.preventDefault();
      });

    });
    $(window).scroll(function () {
      
     
      if ($(this).scrollTop() > 50) {
      
     
        $('#changedrop2').attr("src", "../../../assets/images/languageiconb.svg");
      }
      else {
     
        $('#changedrop2').attr("src", "../../../assets/images/languageiconb.svg");
      }
    });

   
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

    // (document.getElementById("language") as HTMLInputElement).style.color = "#000";
    
    
  }
  getLang(data) {
    console.log(data);
    if (data == 'LA-TA') {
      this.showlang = 'TA';
      this.languageselect = "LA-TA";
      if (window.innerWidth < 2700)
      {
        document.getElementById("navbarnavid").style.marginLeft = "35%";
      }
      if (window.innerWidth < 1600)
      {
        document.getElementById("navbarnavid").style.marginLeft = "15%";
        document.getElementById("navdropdown1").style.marginLeft = "18%";
        document.getElementById("navdropdown2").style.marginLeft = "30%";
     
      }
      if (window.innerWidth < 1500)
      {
        document.getElementById("navbarnavid").style.marginLeft = "9%";
        document.getElementById("navdropdown1").style.marginLeft = "13%";
        document.getElementById("navdropdown2").style.marginLeft = "25%";
        }
      if (window.innerWidth < 1200) {
     
        (document.getElementById(`navlink1`) as HTMLInputElement).style.padding = "10px 0";
        (document.getElementById(`navlink2`) as HTMLInputElement).style.padding = "10px 0";
        (document.getElementById(`navlink3`) as HTMLInputElement).style.padding = "10px 0";
        (document.getElementById(`navlink4`) as HTMLInputElement).style.padding = "10px 0";
        (document.getElementById(`navlink5`) as HTMLInputElement).style.padding = "10px 0";
        document.getElementById("navbarnavid").style.marginLeft = "6%";
        document.getElementById("navdropdown1").style.marginLeft = "11%";
        document.getElementById("navdropdown2").style.marginLeft = "23%";
      }
      if (window.innerWidth < 800) {
     
        (document.getElementById(`navlink1`) as HTMLInputElement).style.padding = "10px 1rem";
        (document.getElementById(`navlink2`) as HTMLInputElement).style.padding = "10px 1rem";
        (document.getElementById(`navlink3`) as HTMLInputElement).style.padding = "10px 1rem";
        (document.getElementById(`navlink4`) as HTMLInputElement).style.padding = "10px 1rem";
        (document.getElementById(`navlink5`) as HTMLInputElement).style.padding = "10px 1rem";
        document.getElementById("navbarnavid").style.marginLeft = "5%";
        document.getElementById("navdropdown1").style.marginLeft = "9%";
        document.getElementById("navdropdown2").style.marginLeft = "20%";
      }
      if (window.innerWidth < 500) {
     
        (document.getElementById(`navlink1`) as HTMLInputElement).style.padding = "2rem 0";
        (document.getElementById(`navlink2`) as HTMLInputElement).style.padding = "2rem 0";
        (document.getElementById(`navlink3`) as HTMLInputElement).style.padding = "2rem 0";
        (document.getElementById(`navlink4`) as HTMLInputElement).style.padding = "2rem 0";
        (document.getElementById(`navlink5`) as HTMLInputElement).style.padding = "2rem 0";
        document.getElementById("navbarnavid").style.marginLeft = "1%";
        document.getElementById("navdropdown1").style.marginLeft = "0";
        document.getElementById("navdropdown2").style.marginLeft = "0";
      }
    
    
    }
    else {
      this.showlang = 'EN';
      this.languageselect = "LA-EN";
      (document.getElementById(`navlink1`) as HTMLInputElement).style.padding = "10px 0px";
      (document.getElementById(`navlink2`) as HTMLInputElement).style.padding = "10px 0px";
      (document.getElementById(`navlink3`) as HTMLInputElement).style.padding = "10px 0px";
      (document.getElementById(`navlink4`) as HTMLInputElement).style.padding = "10px 0px";
      (document.getElementById(`navlink5`) as HTMLInputElement).style.padding = "10px 0px";
      document.getElementById("navbarnavid").style.marginLeft = "11%";
      if (window.innerWidth < 2700)
      {
        document.getElementById("navbarnavid").style.marginLeft = "35%";
      }
      if (window.innerWidth < 1600)
      {
        document.getElementById("navbarnavid").style.marginLeft = "21%";
        document.getElementById("navdropdown1").style.marginLeft = "24%";
        document.getElementById("navdropdown2").style.marginLeft = "36%";
      }
      if (window.innerWidth < 1200) {
        (document.getElementById(`navlink1`) as HTMLInputElement).style.padding = "10px 0rem";
        (document.getElementById(`navlink2`) as HTMLInputElement).style.padding = "10px 0rem";
        (document.getElementById(`navlink3`) as HTMLInputElement).style.padding = "10px 0rem";
        (document.getElementById(`navlink4`) as HTMLInputElement).style.padding = "10px 0rem";
        (document.getElementById(`navlink5`) as HTMLInputElement).style.padding = "10px 0rem";
        document.getElementById("navbarnavid").style.marginLeft = "13%";
        document.getElementById("navdropdown1").style.marginLeft = "17%";
        document.getElementById("navdropdown2").style.marginLeft = "30%";
      }
      if (window.innerWidth < 800) {
        (document.getElementById(`navlink1`) as HTMLInputElement).style.padding = "10px 1rem 1rem";
        (document.getElementById(`navlink2`) as HTMLInputElement).style.padding = "10px 1rem 1rem";
        (document.getElementById(`navlink3`) as HTMLInputElement).style.padding = "10px 1rem 1rem";
        (document.getElementById(`navlink4`) as HTMLInputElement).style.padding = "10px 1rem 1rem";
        (document.getElementById(`navlink5`) as HTMLInputElement).style.padding = "10px 1rem 1rem";
        document.getElementById("navbarnavid").style.marginLeft = "10%";
        document.getElementById("navdropdown1").style.marginLeft = "14%";
        document.getElementById("navdropdown2").style.marginLeft = "26%";
      }

      if (window.innerWidth < 500) {
     
        (document.getElementById(`navlink1`) as HTMLInputElement).style.padding = "2rem 0";
        (document.getElementById(`navlink2`) as HTMLInputElement).style.padding = "2rem 0";
        (document.getElementById(`navlink3`) as HTMLInputElement).style.padding = "2rem 0";
        (document.getElementById(`navlink4`) as HTMLInputElement).style.padding = "2rem 0";
        (document.getElementById(`navlink5`) as HTMLInputElement).style.padding = "2rem 0";
        document.getElementById("navbarnavid").style.marginLeft = "1%";
        document.getElementById("navdropdown1").style.marginLeft = "0";
        document.getElementById("navdropdown2").style.marginLeft = "0";
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
    document.getElementById("navlink1").style.color = "#CC9F08";
 
   
  
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
  openMenu(metal)
  {
    if (metal == 'diamond')
    {
      // if (window.innerWidth > 500) {
        document.getElementById('goldmenu').style.display = "none";
        document.getElementById('silvermenu').style.display = "none";
        document.getElementById('diamondmenu').style.display = "block";
      // }
      // else {
      //   this.router.navigate(['products','diamond']);
      // }
    
    }
    if (metal == 'gold')
    {
      // if (window.innerWidth > 500) {
      document.getElementById('diamondmenu').style.display = "none";
      document.getElementById('silvermenu').style.display = "none";
      document.getElementById('goldmenu').style.display = "block";
    // }
    // else {
    //   this.router.navigate(['products','gold']);
    // }
  
    }
    if (metal == 'silver')
    {
      // if (window.innerWidth > 500) {
      document.getElementById('diamondmenu').style.display = "none";
      document.getElementById('goldmenu').style.display = "none";
      document.getElementById('silvermenu').style.display = "block";
    // }
    // else {
    //   this.router.navigate(['products','silver']);
    // }
  
      }
  }
  hidesubmenus()
  {
    document.getElementById('diamondmenu').style.display = "none";
    document.getElementById('goldmenu').style.display = "none";
    document.getElementById('silvermenu').style.display = "none";
    document.getElementById('navdropdown2').style.display = "none";
  }
  
}
