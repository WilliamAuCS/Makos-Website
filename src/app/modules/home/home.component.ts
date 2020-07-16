import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  tabletView: boolean = false;
  mobileView: boolean = false; 

  constructor() { }

  ngOnInit(): void {
   
    // Changes width depending on the width of the user's screen
    // ** Currently non-responsive **
    if(window.screen.width <= 960 && window.screen.width > 500)
    {
      // Tablet view
      this.tabletView = true;
      console.log("This is tabletView!");
    }
    else if(window.screen.width <= 500)
    {
      // Mobile view
      this.mobileView = true;
      console.log("This is mobile view!");
    }
  }

}
