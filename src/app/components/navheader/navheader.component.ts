import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navheader',
  templateUrl: './navheader.component.html',
  styleUrls: ['./navheader.component.scss']
})
export class NavheaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    $(".nav-toggle").click(function() {
      $(".nav-menu").slideToggle();
    });
    
    $(window).resize(function() {
      if ($(window).width() > 768) {
        $(".nav-menu").removeAttr("style");
      }
    });
    
    $("ul li").hover(function() {
      $(this)
        .children("ul")
        .stop()
        .slideToggle(500);
    });
    

  }

}
