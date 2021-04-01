import { Component } from '@angular/core';
import { SharedService } from './services/shared.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'SriBalagopalanJewelleryMart';



  constructor(private sh: SharedService)
  {

  }

  ngOnInit(): void {
  

  
    // Blink engine detection
    window.sessionStorage.setItem('lang',"EN");
    
  }


}
