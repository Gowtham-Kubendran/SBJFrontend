import { Component, OnInit ,Inject } from '@angular/core';
import { TranslateService } from 'src/app/services/translate/translate.service';
import { SharedService } from 'src/app/services/shared.service';

import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';


import * as $ from 'jquery';
import * as AOS from 'aos';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';


export interface DialogData {
  url: '';
  code: '';
  name: '';
}


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
  
export class ProductsComponent implements OnInit {
  selectedValue: any;
  talktouscontent: any = "";
  
  cartext = "";



  httpHeaders = new HttpHeaders({
    'Content-Type': 'application/json',
    'Cache-Control': 'no-cache'
  });

  

  metals = ['Gold', 'Silver', 'Diamond'];
  typediamind=[
    {
      
        key: 'allproducts',
        value: 'allproducts'
    },
    {
      key: 'necklace',
      value: 'necklace'
    },
    {
      key: 'stud',
      value: 'stud'
    },
    {
      key: 'rings',
      value: 'rings'
    },
    
  ]
  types = [
    {
      key: 'allproducts',
      value: 'allproducts'
    },
    {
      key: 'maalai',
      value: 'maalai'
    },{
      key: 'bangles',
      value: 'bangles'
    },{
      key: 'necklace',
      value: 'necklace'
    },{
      key: 'chains',
      value: 'chains'
    },{
      key: 'earrings',
      value: 'earrings'
    },{
      key: 'rings',
      value: 'rings'
    },{
      key: 'bracelet',
      value: 'bracelet'
    },
    {
      key: 'anklet',
      value: 'anklet'
    },
    {
      key: 'dollar',
      value: 'dollar'
    },
  ]
  sub;
  metal;
  selectedMetal: any;
  showspinner = true;
  sam: any;

  openDialog(item) {
    // console.log(item.imgsrc);
    this.dialog.open(DialogDataExampleDialog, {
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
  value: any = 'allproducts';
  selectedoption: any = 'allproducts';
  
  tempdata: any[] = [];
  constructor(private ts:TranslateService,private sh:SharedService,private route: ActivatedRoute,
    private router: Router, private http:HttpClient,public dialog: MatDialog) { }


  aosInit()
  {
    this.ts.updateComp1Val(window.sessionStorage.getItem('lang'));

    
    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
          return;
      }
      window.scrollTo(0, 0)
    });
    
    AOS.init({
      duration:1200
    });

  }

  
  ngOnInit() {

    
    
     this.route.params.subscribe(params => this.selectedMetal=params.metal);
    
    
    this.showspinner = true;
    document.getElementById('wrapper').style.opacity = "0";
     

    //  this.showspinner = false;
    
    this.selectedValue = "allproducts";
    this.selectedoption = "allproducts";

    // this.selectedMetal=this.route.snapshot.paramMap.get('metal');
let img=(document.getElementById("heroimgplaceholder") as HTMLImageElement)
    if (!this.selectedMetal)
    {
      this.selectedMetal = "allmetals";
      img.src = "./assets/images/banners/goldbanner.jpg";
      }
    
    if (this.selectedMetal.toLowerCase() == 'gold')
    {
      this.cartext = this.ts.translate('gold');
      this.talktouscontent = this.ts.translate('talktousgold');
      img.src = "./assets/images/banners/goldbanner.jpg";
    }
    else if (this.selectedMetal.toLowerCase() == 'silver')
    {
      this.cartext = this.ts.translate('silver');
      this.talktouscontent = this.ts.translate('talktoussilver');
      img.src = "./assets/images/banners/silverbanner.jpg";
    }
    else if (this.selectedMetal.toLowerCase() == 'diamond')
    {
      this.cartext = this.ts.translate('diamond');
      this.talktouscontent = this.ts.translate('talktousdiamond');
      img.src = "./assets/images/banners/diamondbanner.jpg";
    }
    else {
      this.talktouscontent = this.ts.translate('talktousproduct');
      img.src = "./assets/images/banners/goldbanner.jpg";
    }
    
    this.cartext = this.selectedMetal.toLowerCase();
    
    //this.selectedMetal="allmetals"

    if (this.sh.getValue()) {
      this.value = this.sh.getValue();
      this.selectedoption = this.value;
      this.selectedValue = this.value;

    }

    // this.value="allproducts"

    this.getAllProducts().subscribe(data => {
      

      this.showspinner = false;
      document.getElementById('wrapper').style.opacity = "1";
      this.jsondata = data;
      
      this.tempdata = this.jsondata;
      // console.log(this.tempdata);

      if (this.selectedMetal != "allmetals")
      {
        this.jsondata = this.jsondata.filter(data => {
          return data.metal.toLowerCase() == this.selectedMetal.toLowerCase();
        });
        console.log(this.tempdata);
      }

      if (this.value != 'allproducts')
      {
        this.tempdata = this.jsondata.filter(data => {
         return data.category.toLowerCase() == this.value;
        });
      }
      else
      {
        this.tempdata = this.jsondata;
      }
    
      
    });





    $(document).scroll(function() {
      var y = $(document).scrollTop(), //get page y value 
          header = $("#selectedJewell");
      if(y >= 450)  {
        header.css({ position: "fixed", "left": "0", "top": "3em", "width": "100%", "background-color": "#fff", "z-index": "2", "padding": "14px 2.6em 8px 2.6em  " });
        if (window.innerWidth < 1200) {
          header.css({"top":"4em","padding":"14px 2.6em 8px 45px"})
        }
      } else {
        header.css({ "position": "relative", "top": "0em", "background-color": "transparent", "z-index": "2", "width": "auto", "padding": "0px 2.6em 40px 2.6em  " });
        if (window.innerWidth < 1200)
        {
          header.css({"padding": "0px 0em 40px 45px  " })
          }
      }
  });

    
    $(document).scroll(function() {
      var y = $(document).scrollTop(), //get page y value 
          header = $("#dropdown");
      if(y >= 420)  {
        header.css({ position: "fixed", "left": "0", "top": "3em", "width": "100%", "background-color": "#fff", "z-index": "1", "padding": "6em 5em 0em 5em" });
        $('#findtext').css({ 'display': 'none' });
        if (header.css('display') == 'block') {
          $("#productsLists").css({ "padding-top": "22em" });
        }
       
      } else {
        header.css({ "position": "relative", "top": "0em", "background-color": "transparent", "z-index": "2", "width": "100%", "padding": "3em 5em 0 5em" });
        $('#findtext').css({ 'display': 'block' });
        if (header.css('display') == 'block') {
          $("#productsLists").css({ "padding-top": "8em" });
        }
      }
  });



    this.aosInit();
   


  
   

  }
  ngAfterViewInit() {
    // this.showspinner = false;

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
 

  getAllProducts(): Observable<any> 
  {
    return this.http.get('./assets/products.json', this.options);
  }

  handleChange(event)
  {
    (document.getElementById(event) as HTMLInputElement).checked = true;
    this.aosInit();
    window.scrollTo(0, 0);
    this.value = event;
    this.selectedoption = this.value;
    this.selectedValue = event;


      if (this.value != 'allproducts')
      {
        this.tempdata = this.jsondata.filter(data => {
         return data.category.toLowerCase() == this.value;
        });
        // console.log(this.jsondata);
        // console.log(this.tempdata);
      }
      else
      {
        this.tempdata = this.jsondata;
      }
    
    
    
 
    
    

  }

  goToProducts(types,metals)
  {
    this.sh.setValue(types);

    this.router.navigate(['products',metals]);
  }

  
  goToPage(route)
  {
    this.router.navigate([route]);
  }
  

}



@Component({
  selector: 'dialog-data-example-dialog',
  templateUrl: 'dialog-data-example-dialog.html',
  styleUrls: ['dialogcss.scss'],
})
  
export class DialogDataExampleDialog {
  constructor(@Inject(MAT_DIALOG_DATA) public data: DialogData) {}
}
