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

  constructor(private ts:TranslateService,private router:Router,private snackBar: MatSnackBar) { }
  emailstring:any="";
  subject:any;
  firstname:any="";
  phonenumber:any;
  useremail:any="";
  message:any="";

  sbjmailID = "1994gowtham@gmail.com"
  
  ngOnInit() {

   
    this.ts.updateComp1Val(window.sessionStorage.getItem('lang'));

    
    this.emailstring= `mailto:1994gowtham@gmail.com?Subject=Enquiry&body=Hi Team ,\n Myself ... `;
    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
          return;
      }
      window.scrollTo(0, 0)
  });
  }

 

  goToPage(route)
  {
    this.router.navigate([route]);
  }

  sendmessage()
  {
    if (this.firstname == "" || this.phonenumber == "" || this.useremail == "" || this.subject=="" || this.message == "")
    {
      this.showerrormessage = true;
    
    }
    else {
      this.showerrormessage = false;
      emailjs.send("service_8kkn9d8", "template_9xzsunc", {
        subject: this.subject,
        name: this.firstname + " (" + this.phonenumber + ")",
        message: this.message,
        reply_to: this.useremail,
      }, "user_7DouggsmqErev7C2MVHFp").then((result: EmailJSResponseStatus) => {
        console.log(result.text);
      
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
