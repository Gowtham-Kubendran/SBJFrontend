import { Component, OnInit, Inject,AfterViewInit } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { TranslateService } from 'src/app/services/translate/translate.service';
import { SharedService } from 'src/app/services/shared.service';
import { ActivatedRoute, Router, NavigationEnd, RouterEvent } from '@angular/router';

import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Observable } from 'rxjs';

import * as $ from 'jquery';
import * as AOS from 'aos';
import { filter } from 'rxjs/operators';




export interface DialogData {
  url: '';
  code: '';
  name: '';
}

@Component({
  selector: 'app-collections',
  templateUrl: './collections.component.html',
  styleUrls: ['./collections.component.scss']
})
  
  
export class CollectionsComponent implements OnInit,AfterViewInit {

  
  selectedValue: any;
  httpHeaders = new HttpHeaders({
    'Content-Type': 'application/json',
    'Cache-Control': 'no-cache'
  });
  showspinner = true;
  cartext = "";
  metals = ["marriage", "women", "men", "kids", "gifts"];
  types = [
    {
      key: "allcollections",
      value:"allcollections"
    },
    {
      key: "marriage",
      value:"marriage"
      },
    {
      key: "women",
      value:"women"
      },
     {
     key: "men",
     value:"men"
     },
    {
     key: "kids",
     value:"kids"
     },
     {
      key: "gifts",
      value:"gifts"
      },
            
  ]
  sub;
  metal;
  selectedoption: any;


  openDialog(item) {
    // console.log(item.imgsrc);
    this.dialog.open(DialogDataExample, {
      data: {
        url: item.imgsrc,
        name: item.name,
        code: item.code
      },
      height: 'auto',
      width:'95vh'
    });
  }
  options = {
    headers: this.httpHeaders
  };

  jsondata: any[]= [];
  value: any = 'allcollections';
  
  tempdata: any[] = [];
  constructor(public ts:TranslateService,public sh:SharedService,public route: ActivatedRoute,
    public router: Router, public http: HttpClient, public dialog: MatDialog) { 
    this.router.events.pipe(filter(event => event instanceof NavigationEnd)).subscribe(event => this.getallDetails());    
    
    }

  aosInit()
  {
    AOS.init({
      duration:1200
    });

  }
  gotowhatsapp(src)
  {
    console.log(src);
    src=src.replace("../../../", "https://sribalagopalanjewellerymart.com/");
    console.log(src);
    window.open("//api.whatsapp.com/send?phone=919994926518&text=I need to know more about \n"+src);
  }
  // clearcolor()
  // {
  //   document.getElementById("navlink1").style.color = "#000";
  //   document.getElementById("navlink2").style.color = "#000";
  //   document.getElementById("navlink3").style.color = "#000";
  //   document.getElementById("navlink4").style.color = "#000";
  //   document.getElementById("navlink5").style.color = "#000";
  // }
  ngOnInit() {
   

    if (window.innerWidth < 600)
    {
      $('#collheroimg').attr("src", "../../../assets/images/mobilebanners/collectionsmobile.jpg");
     
        
     }
    
   

  }

 
  getallDetails()
  {
    // this.clearcolor();
    // document.getElementById("navlink2").style.color = "#CC9F08";
    this.showspinner = true;
    // document.getElementById('wrapper').style.opacity = "0";
    this.ts.updateComp1Val(window.sessionStorage.getItem('lang'));


    this.cartext = 'allcollections';
    
  $(document).scroll(function() {
    var y = $(document).scrollTop(), //get page y value 
        header = $("#selectedJewell");
    if(y >= 450)  {
      header.css({ position: "fixed", "left": "0", "top": "9rem", "width": "100%", "background-color": "#fff", "z-index": "2", "padding": "22px 60px 8px" });
      if (window.innerWidth < 1200)
      {
        header.css({ "top": "4em", "padding": "14px 2em 8px 2em " })
        }
    } else {
      header.css({ "position": "relative", "top": "0em", "background-color": "transparent", "z-index": "2", "width": "auto", "padding": "0px 0em 40px 40px  " });
      if (window.innerWidth < 1200)
      {
        header.css({"padding": "0px 0em 40px 40px  " })
        }
    }
});

  
  $(document).scroll(function() {
    var y = $(document).scrollTop(), //get page y value 
        header = $("#dropdown");
    if(y >= 420)  {
      header.css({ position: "fixed", "left": "0", "top": "3em", "width": "100%", "background-color": "#fff", "z-index": "1", "padding": "6em 1em 0em 1em" });
      $('#findtext').css({ 'display': 'none' });
      if (header.css('display') == 'block') {
        $("#productsLists").css({ "padding-top": "22em" });
      }
     
    } else {
      header.css({ "position": "relative", "top": "0em", "background-color": "transparent", "z-index": "2", "width": "100%", "padding": "3em 3em 0 3em" });
      $('#findtext').css({ 'display': 'block' });
      if (header.css('display') == 'block') {
        $("#productsLists").css({ "padding-top": "8em" });
      }
    }
});

    
    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
          return;
      }
      window.scrollTo(0, 0)
  });


    this.aosInit();
    
    
    if(this.sh.getValue())
      this.value = this.sh.getValue();
    // this.cartext = this.ts.translate(this.value);
    this.selectedoption = this.value;
    this.selectedValue = this.value;
  // console.log(this.value);
  

    this.getAllProducts().subscribe(data => {
      this.showspinner = false;
      // document.getElementById('wrapper').style.opacity = "1";
      this.jsondata = data;
      // this.jsondata.forEach(ele => {
      //   ele.imgsrc.replace(".jpg", ".webp");
      // });
      this.tempdata = this.jsondata;
      if (!this.metals.includes(this.value)) {
        (document.getElementById(this.value) as HTMLInputElement).checked = true;
        // (document.getElementById('allcollections') as HTMLInputElement).checked = true; //commented
        this.value = 'allcollections';
        
      }
      else {
        this.tempdata = this.tempdata.filter(data => data.collection.includes(this.value));
        // console.log(this.value);
        // (document.getElementById(this.value) as HTMLInputElement).checked = true; //checked
      }
      // console.log(this.tempdata);
    });
  }
 
  ngAfterViewInit() {
    
    this.router.events.pipe(
      filter((event: RouterEvent) => event instanceof NavigationEnd)
    ).subscribe(() => {
      this.getallDetails();
    });



    $('#exampleModal').on('show.bs.modal', function (event) {
      var button = $(event) // Button that triggered the modal
      var recipient = button.data('whatever') // Extract info from data-* attributes
      // If necessary, you could initiate an AJAX request here (and then do the updating in a callback).
      // Update the modal's content. We'll use jQuery here, but you could use a data binding library or other methods instead.
      // console.log(recipient);
      var modal = $(this)
      modal.find('.modal-title').text('New message to ' + recipient)
      modal.find('.modal-body input').val(recipient)
    });
  }
 
  goToCollections(data)
  {
    this.sh.setValue(data);
    this.router.navigate(['collections']);
  }

  getAllProducts(): Observable<any> 
  {
    return this.http.get('./assets/products.json', this.options);
  }
  goToPage(route)
  {
    this.router.navigate([route]);
  }


  handleChange(event)
  {

    // this.showspinner = true;
    this.aosInit();
    this.selectedValue = event;
    this.selectedoption = this.value;
    // this.cartext = this.ts.translate(event);
    if (this.selectedValue == 'allcollections')
    {
      this.tempdata = this.jsondata;
    }
    else
    {
      this.tempdata = this.jsondata.filter(data => {
        return data.collection.includes(this.selectedValue);
      });
      // console.log(this.tempdata);
      }
  }

 
  

}

@Component({
  selector: 'dialog-data-example-dialog',
  templateUrl: 'dialog-data-example.html', 
  styleUrls: ['stylecss.scss'],
})
export class DialogDataExample {
  constructor(@Inject(MAT_DIALOG_DATA) public data: DialogData) { }
  
  closebut()
  {
  
  }
}
