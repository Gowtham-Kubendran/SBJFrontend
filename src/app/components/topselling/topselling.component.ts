import { Component, OnInit, Inject } from '@angular/core';
import * as $ from 'jquery';
import * as slick from 'slick-carousel';
import * as multislider from '../../modules/multislider/js/multislider';
import { TranslateService } from 'src/app/services/translate/translate.service';
import { SharedService } from 'src/app/services/shared.service';
import { ActivatedRoute, Router } from '@angular/router';
import * as AOS from 'aos';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';

export interface DialogData {
  url: '';
  code: '';
  name: '';
}

@Component({
  selector: 'app-topselling',
  templateUrl: './topselling.component.html',
  styleUrls: ['./topselling.component.scss']
})
  


export class TopsellingComponent implements OnInit {
  step1;
  
  imgsrc: any[] = [
    
    
    {
      "imgsrc": "../../../assets/images/maalai/maalai2.jpg",
      "name": "2",
      "code": "SBJGMA002",
      "category": "Maalai",
      "collection": ["marriage","women"],
      "metal": "Gold"
    },
    {
      "imgsrc": "../../../assets/images/maalai/maalai3.jpg",
      "name": "3",
      "code": "SBJGMA003",
      "category": "Maalai",
      "collection": ["marriage","women"],
      "metal": "Gold"
    },
    {
      "imgsrc": "../../../assets/images/maalai/maalai11.jpg",
      "name": "11",
      "code": "SBJGMA011",
      "category": "Maalai",
      "collection": ["marriage","women"],
      "metal": "Gold"
    },
    {
      "imgsrc": "../../../assets/images/necklace/necklace8.jpg",
      "name": "2",
      "code": "SBJGNC002",
      "category": "Necklace",
      "collection": ["marriage","women"],
      "metal": "Gold"
    },
    {
      "imgsrc": "../../../assets/images/necklace/necklace9.jpg",
      "name": "3",
      "code": "SBJGNC003",
      "category": "Necklace",
      "collection": ["marriage","women"],
      "metal": "Gold"
    },
    {
      "imgsrc": "../../../assets/images/diamondnecklace/necklace2.jpg",
      "name": "2",
      "code": "SBJDNC002",
      "category": "Necklace",
      "collection": ["marriage","women"],
      "metal": "Diamond"
    },
    {
      "imgsrc": "../../../assets/images/diamondnecklace/necklace3.jpg",
      "name": "3",
      "code": "SBJDNC003",
      "category": "Necklace",
      "collection": ["marriage","women","kids"],
      "metal": "Diamond"
    },
    {
      "imgsrc": "../../../assets/images/diamondnecklace/necklace6.jpg",
      "name": "6",
      "code": "SBJDNC006",
      "category": "Necklace",
      "collection": ["marriage","women","kids"],
      "metal": "Diamond"
    },
    {
      "imgsrc": "../../../assets/images/bangles/bangles12.jpg",
      "name": "1",
      "code": "SBJGBA001",
      "category": "Bangles",
      "collection": ["marriage", "women"],
      "metal": "Gold"
    },
    {
      "imgsrc": "../../../assets/images/rings/rings8.jpg",
      "name": "8",
      "code": "SBJGRN008",
      "category": "Rings",
      "collection": ["men"],
      "metal": "Gold"
    },
    {
      "imgsrc": "../../../assets/images/earrings/earrings5.jpg",
      "name": "5",
      "code": "SBJGER005",
      "category": "Earrings",
      "collection": [ "women","kids"],
      "metal": "Gold"
    },
    {
      "imgsrc": "../../../assets/images/rings/rings13.jpg",
      "name": "2",
      "code": "SBJDRN002",
      "category": "Rings",
      "collection": ["women"],
      "metal": "Diamond"
    },

  ];
  step2: any;
  ngOnInit() {

    // $(document).ready(function () {

      (<any>$('#demo2')).carousel({
        touch: false
      });

    //  (<any>$('#demo1')).carousel({
    //     touch: false
    //  });
      
    $("#demo2").on('slide.bs.carousel', function (){
      alert('A new slide is about to be shown!');
    });
      
    
    // });

    

    document.getElementById("prevbut1").style.visibility = "hidden"; 
    document.getElementById("prevbut2").style.visibility = "hidden";
    

    this.ts.updateComp1Val(window.sessionStorage.getItem('lang'));
    this.step1 = 0;
    this.step2 = 0;
    AOS.init({
      duration:1200
    });
    

  }

  constructor(public ts:TranslateService,public sh:SharedService,public route: ActivatedRoute,
    public router: Router, public dialog: MatDialog) {
    
  }
  show1()
  {
    document.getElementById("prevbut1").style.visibility = "visible"; 
    document.getElementById("nextbut1").style.visibility = "visible";

  }
  show2()
  {
    document.getElementById("prevbut1").style.visibility = "visible";
    document.getElementById("nextbut2").style.visibility = "visible";
  }
    showprev1()
    {
     
      this.show1();
      ++this.step1;
      document.getElementById("prevbut1").style.visibility = "visible";
      if (this.step1 == 2)
      {
        document.getElementById("nextbut1").style.visibility = "hidden";
      }
      else {
        document.getElementById("nextbut1").style.visibility = "visible";
      }
  }
  hideprev1()
  {
    this.show1();
    --this.step1;
    if (this.step1 == 0)
    {
      document.getElementById("prevbut1").style.visibility = "hidden";
      
    }
    else 
      {
        document.getElementById("prevbut1").style.visibility = "visible";
        
        
    }
  }
    showprev2()
    {
      (<any>$('#demo2')).carousel({
        touch: false
      });
        
      this.show2();
      ++this.step2;
      document.getElementById("prevbut2").style.visibility = "visible";
      if (this.step2 == 11)
      {
        document.getElementById("nextbut2").style.visibility = "hidden";
      }
      else {
        document.getElementById("nextbut2").style.visibility = "visible";
      }
  }
  hideprev2()
  {
    (<any>$('#demo2')).carousel({
      touch: false
    });
      
    this.show2();
    --this.step2;
    if (this.step2 == 0)
    {
      document.getElementById("prevbut2").style.visibility = "hidden";
    }
    else {
      document.getElementById("nextbut2").style.visibility = "visible";
    }
  }

  openDialog(item) {
    // console.log(item.imgsrc);
    this.dialog.open(TopSellingDialog, {
      data: {
        url: item.imgsrc,
        name: item.name,
        code: item.code
      },
      height: 'auto',
      width:'95vh'
    });
  }
}

@Component({
  selector: 'dialog-data-example-dialog',
  templateUrl: 'dialog-data-example-dialog.html',
  styleUrls: ['dialogcss.scss'],
})
  
export class TopSellingDialog {
  constructor(@Inject(MAT_DIALOG_DATA) public data: DialogData) {}
}


