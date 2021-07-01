import { Component, OnInit ,Inject } from '@angular/core';
import { TranslateService } from 'src/app/services/translate/translate.service';
import { SharedService } from 'src/app/services/shared.service';

import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';


import * as $ from 'jquery';
import * as AOS from 'aos';
import { ActivatedRoute, Router, NavigationEnd, RouterEvent } from '@angular/router';
import { filter } from 'rxjs/operators';

import { HttpUrlEncodingCodec } from '@angular/common/http';


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
  codec = new HttpUrlEncodingCodec;
  cartext = "";



  httpHeaders = new HttpHeaders({
    'Content-Type': 'application/json',
    'Cache-Control': 'no-cache'
  });

  

  metals = ['Gold', 'Silver', 'Diamond'];
  typediamond = [
    {
      
      key: 'allproducts',
      value: 'allproducts'
    },
    {
      key: 'necklace',
      value: 'necklace'
    },
    {
      key: 'earrings',
      value: 'earrings'
    },
    {
      key: 'rings',
      value: 'rings'
    }
    
  ];
  typeGold = [
    {
      key: 'allproducts',
      value: 'allproducts'
    },
    {
      key: 'maalai',
      value: 'maalai'
    }, {
      key: 'bangles',
      value: 'bangles'
    }, {
      key: 'necklace',
      value: 'necklace'
    }, {
      key: 'chains',
      value: 'chains'
    }, {
      key: 'earrings',
      value: 'earrings'
    }, {
      key: 'rings',
      value: 'rings'
    }, {
      key: 'bracelet',
      value: 'bracelet'
    },
    {
      key: 'dollar',
      value: 'dollar'
    },
  ];
  typeSilver = [
    {
    key: 'allproducts',
    value: 'allproducts'
  },
  {
    key: 'gifts',
    value: 'gifts'
    },
    {
      key: 'silvervessels',
      value: 'silvervessels'
    },
    {
      key: 'idols',
      value: 'idols'
    },
    {
      key: 'poojaitems',
      value: 'poojaitems'
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
  constructor(public ts:TranslateService,public sh:SharedService,public route: ActivatedRoute,
    private router: Router, private http: HttpClient, public dialog: MatDialog) {
    // this.loadflag
     this.router.events.pipe(filter(event => event instanceof NavigationEnd)).subscribe(event =>  this.getallDetails());    

      }

      ngEncode(param: string){
        return this.codec.encodeValue(param);
  }
  
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



    this.router.events.pipe(
      filter((event: RouterEvent) => event instanceof NavigationEnd)
    ).subscribe(() => {
      this.getallDetails();
    });

    
   
    this.aosInit();
   

   

  }
  getallDetails()
  {
    
    
     this.route.params.subscribe(params => this.selectedMetal=params.metal);
    
    console.log(this.selectedMetal);
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
      if (window.innerWidth < 600)
      {
        img.src = "../../../assets/images/mobilebanners/goldprodutsmobile.jpg"
       
      
        }
      this.types = this.typeGold;
      }
    
    if (this.selectedMetal.toLowerCase() == 'gold')
    {
      this.cartext = this.ts.translate('goldjewels');
      this.talktouscontent = this.ts.translate('talktousgold');
      img.src = "./assets/images/banners/goldbanner.jpg";
      if (window.innerWidth < 600)
      {
        img.src = "../../../assets/images/mobilebanners/goldprodutsmobile.jpg"
       
      
        }
      this.types = this.typeGold;
    }
    else if (this.selectedMetal.toLowerCase() == 'silver')
    {
      this.cartext = this.ts.translate('silverjewels');
      this.talktouscontent = this.ts.translate('talktoussilver');
      img.src = "./assets/images/banners/silverbanner.jpg";
      if (window.innerWidth < 600)
      {
        img.src = "../../../assets/images/mobilebanners/silverproductsmobile.jpg"
       
      
        }
      this.types = this.typeSilver;
    }
    else if (this.selectedMetal.toLowerCase() == 'diamond')
    {
      this.cartext = this.ts.translate('diamondjewels');
      this.talktouscontent = this.ts.translate('talktousdiamond');
      img.src = "./assets/images/banners/diamondbanner.jpg";
      if (window.innerWidth < 600)
      {
        img.src = "../../../assets/images/mobilebanners/diamondproductsmobile.jpg"
       
      
        }
      this.types = this.typediamond;
    }
    else {
      this.talktouscontent = this.ts.translate('talktousproduct');
      this.cartext = this.ts.translate('goldjewels');
      img.src = "./assets/images/banners/goldbanner.jpg";
      if (window.innerWidth < 600)
      {
        img.src = "../../../assets/images/mobilebanners/goldprodutsmobile.jpg"
       
      
        }
      this.types = this.typeGold;
    }
    
    // this.cartext = this.selectedMetal.toLowerCase();
    
    //this.selectedMetal="allmetals"

   

    // this.value="allproducts"

    // this.getAllProducts();

    this.getAllProducts().subscribe(data => {
      

      this.showspinner = false;
      document.getElementById('wrapper').style.opacity = "1";
      this.jsondata = data;
      this.jsondata.forEach(ele => {
        ele.imgsrc.replace(".jpg", ".jpg");
      });
    
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
        header.css({ position: "fixed", "left": "0", "top": "6rem", "width": "100%", "background-color": "#fff", "z-index": "2", "padding": "22px 2.6em 8px 60px" });
        if (window.innerWidth < 1200) {
          header.css({"top":"4em","padding":"14px 2.6em 8px 60px"})
        }
      } else {
        header.css({ "position": "relative", "top": "0em", "background-color": "transparent", "z-index": "2", "width": "auto", "padding": "0px 40px 40px 40px  " });
        if (window.innerWidth < 1200)
        {
          header.css({"padding": "0px 0em 40px 62px  " })
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
        header.css({ "position": "relative", "top": "0em", "background-color": "transparent", "z-index": "2", "width": "100%", "padding": "3em 1em 0 1em" });
        $('#findtext').css({ 'display': 'block' });
        if (header.css('display') == 'block') {
          $("#productsLists").css({ "padding-top": "8em" });
        }
      }
  });


  if (this.sh.getValue()) {
    this.value = this.sh.getValue();
    this.selectedoption = this.value;
    this.selectedValue = this.value;
    setTimeout(() => {
      this.handleChange(this.selectedoption);
    }, 500);
  

  }
 

  }
  gotowhatsapp(src)
  {
    console.log(src);
    src=src.replace("../../../", "https://sribalagopalanjewellerymart.com/");
    console.log(src);
    window.open("//api.whatsapp.com/send?phone=919994926518&text=I need to know more about \n"+src);
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
 refreshpage()
 {
   console.log('refresh');
   window.location.reload();
 }

  getAllProducts(): Observable<any> 
  {
    return this.http.get('./assets/products.json', this.options);
  }

  handleChange(event)
  {
    // document.getElementById("productdropicon").style.transform = "rotate(180deg)";
    // (document.getElementById(event) as HTMLInputElement).checked = true; //commented
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
