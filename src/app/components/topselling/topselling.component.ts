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
        "imgsrc": "../../../assets/images/bangles/bangles1.jpg",
        "name": "1",
        "code": "SBJBA001",
        "category": "Bangles",
        "collection": ["marriage", "women"],
        "metal": "Gold"
    },
    {
      "imgsrc": "../../../assets/images/bangles/bangles3.jpg",
      "name": "3",
      "code": "SBJBA003",
      "category": "Bangles",
      "collection": ["marriage", "women"],
      "metal": "Gold"
    },
    {
      "imgsrc": "../../../assets/images/earrings/earrings1.jpg",
      "name": "1",
      "code": "SBJER001",
      "category": "Earrings",
      "collection": ["marriage", "women"],
      "metal": "Gold"
    },
    {
      "imgsrc": "../../../assets/images/maalai/maalai4.jpg",
      "name": "4",
      "code": "SBJMA004",
      "category": "Maalai",
      "collection": ["marriage","women"],
      "metal": "Gold"
    },
    {
      "imgsrc": "../../../assets/images/maalai/maalai9.jpg",
      "name": "9",
      "code": "SBJMA009",
      "category": "Maalai",
      "collection": ["marriage","women"],
      "metal": "Gold"
    },
    {
      "imgsrc": "../../../assets/images/necklace/necklace2.jpg",
      "name": "2",
      "code": "SBJNC002",
      "category": "Necklace",
      "collection": ["marriage","women"],
      "metal": "Gold"
    },
    {
      "imgsrc": "../../../assets/images/necklace/necklace3.jpg",
      "name": "3",
      "code": "SBJNC003",
      "category": "Necklace",
      "collection": ["marriage","women"],
      "metal": "Gold"
    },
    {
      "imgsrc": "../../../assets/images/necklace/necklace7.jpg",
      "name": "7",
      "code": "SBJNC007",
      "category": "Necklace",
      "collection": ["marriage","women"],
      "metal": "Gold"
    },
    {
      "imgsrc": "../../../assets/images/necklace/necklace12.jpg",
      "name": "12",
      "code": "SBJNC012",
      "category": "Necklace",
      "collection": ["marriage","women"],
      "metal": "Gold"
    },
    {
      "imgsrc": "../../../assets/images/rings/rings3.jpg",
      "name": "3",
      "code": "SBJRN003",
      "category": "Rings",
      "collection": ["men"],
      "metal": "Gold"
    },
    {
      "imgsrc": "../../../assets/images/bangles/bangles1.jpg",
      "name": "1",
      "code": "SBJBA001",
      "category": "Bangles",
      "collection": ["marriage", "women"],
      "metal": "Gold"
  },
  {
    "imgsrc": "../../../assets/images/bangles/bangles3.jpg",
    "name": "3",
    "code": "SBJBA003",
    "category": "Bangles",
    "collection": ["marriage", "women"],
    "metal": "Gold"
  },
  ];
  step2: any;
  ngOnInit() {
    this.ts.updateComp1Val(window.sessionStorage.getItem('lang'));
    this.step1 = 0;
    this.step2 = 0;
    AOS.init({
      duration:1200
    });
    
  }

  constructor(private ts:TranslateService,private sh:SharedService,private route: ActivatedRoute,
    private router: Router, public dialog: MatDialog) {
    
  }
  show1()
  {
    document.getElementById("prevbut1").style.opacity = "1"; 
    document.getElementById("nextbut1").style.opacity = "1";

  }
  show2()
  {
    document.getElementById("prevbut2").style.opacity = "1";
    document.getElementById("nextbut1").style.opacity = "1";
  }
    showprev1()
    {
      this.show1();
      ++this.step1;
      document.getElementById("prevbut1").style.opacity = "1";
      if (this.step1 == 3)
      {
        document.getElementById("nextbut1").style.opacity = "0";
      }
      else {
        document.getElementById("nextbut1").style.opacity = "1";
      }
  }
  hideprev1()
  {
    this.show1();
    --this.step1;
    if (this.step1 == 0)
    {
      document.getElementById("prevbut1").style.opacity = "0";
      
    }
    else 
      {
        document.getElementById("prevbut1").style.opacity = "1";
        
        
    }
  }
    showprev2()
    {
      this.show2();
      ++this.step2;
      document.getElementById("prevbut2").style.opacity = "1";
      if (this.step2 == 7)
      {
        document.getElementById("nextbut2").style.opacity = "0";
      }
      else {
        document.getElementById("nextbut2").style.opacity = "1";
      }
  }
  hideprev2()
  {
    this.show2();
    --this.step2;
    if (this.step2 == 0)
    {
      document.getElementById("prevbut2").style.opacity = "0";
    }
    else {
      document.getElementById("nextbut2").style.opacity = "1";
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


