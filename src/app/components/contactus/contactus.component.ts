import { Component, OnInit } from '@angular/core';
import { TranslateService } from 'src/app/services/translate/translate.service';
import { SharedService } from 'src/app/services/shared.service';
import { Router, NavigationEnd } from '@angular/router';
import emailjs, { EmailJSResponseStatus } from 'emailjs-com';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.scss']
})
export class ContactusComponent implements OnInit {
  showerrormessage: boolean;
  sending: boolean;
  
  regexp: RegExp;
  fullnameerror: boolean;
  phoneerror: boolean;
  emailerror: boolean;
  messageerror: boolean;
  suberror: boolean;
  cartext: string;

  constructor(public ts:TranslateService,public router:Router,public snackBar: MatSnackBar) { }
  emailstring:any="";
  subject:any;
  firstname:any="";
  phonenumber:any;
  useremail:any="";
  message:any="";

  sbjmailID = "1994gowtham@gmail.com"
  
  // clearcolor()
  // {
  //   document.getElementById("navlink1").style.color = "#000";
  //   document.getElementById("navlink2").style.color = "#000";
  //   document.getElementById("navlink3").style.color = "#000";
  //   document.getElementById("navlink4").style.color = "#000";
  //   document.getElementById("navlink5").style.color = "#000";
  // }
  ngOnInit() {
    this.sending = false;
    this.cartext = "contactus";
    this.clearerrors();
    
    
    // this.clearcolor();
    // document.getElementById("navlink5").style.color = "#CC9F08";

    this.ts.updateComp1Val(window.sessionStorage.getItem('lang'));

    
    this.emailstring= `mailto:1994gowtham@gmail.com?Subject=Enquiry&body=Hi Team ,\n Myself ... `;
    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
          return;
      }
      window.scrollTo(0, 0)
    });
    
    if (window.innerWidth < 600)
    {
      $('#contactushero').attr("src", "../../../assets/images/mobilebanners/contactusmobile.jpg");
     
        
     }
    
    
  }

  clearerrors()
  {
    this.fullnameerror   =false;
    this.phoneerror      =false;
    this.emailerror      =false;
    this.messageerror    =false;
    this.suberror        =false;
  }


  goToPage(route)
  {
    this.router.navigate([route]);
  }

  sendmessage()
  {
    if (!this.phonenumber)
    {
      this.phonenumber = 0;
      }
    // if (this.firstname == "" || this.phonenumber == "" || this.useremail == "" || this.subject=="" || this.message == "")
    // {
    //   this.showerrormessage = true;
    
    // }
    this.clearerrors();
    this.regexp = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
    if (this.firstname.length <= 3)
    {
      this.fullnameerror = true;
    }
    if (this.phonenumber.toString().length != 10)
    {
      this.phoneerror = true;
    }
    if (!this.regexp.test(this.useremail))
    {
      this.emailerror = true;
    }
    if (this.subject.length <= 3)
    {
      this.suberror = true;
      }
    if (this.message.length <= 10)
    {
      this.messageerror = true;
      }
    else {
      this.sending = true;
      this.showerrormessage = false;
      emailjs.send("service_8kkn9d8", "template_9xzsunc", {
        subject: this.subject,
        name: this.firstname + " (" + this.phonenumber + ")",
        message: this.message,
        reply_to: this.useremail,
      }, "user_7DouggsmqErev7C2MVHFp").then((result: EmailJSResponseStatus) => {
        console.log(result.text);
        this.sending = false;
        this.snackBar.open("sent successfully", "close", {
          duration: 3000,
        });

        this.firstname = "";
        this.phonenumber = "";
        this.useremail = "";
        this.subject = "";
        this.message = "";


      }, (error) => {
        console.log(error.text);
        this.snackBar.open("Error sending message. Please try agiain after sometime ..", "close", {
          duration: 3000,
        });
      });;
    }
  }


}
