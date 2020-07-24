import { Component, OnInit } from '@angular/core';
import { ToolbarComponent } from 'src/app/shared/toolbar/toolbar.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private toolbar: ToolbarComponent) { }

  ngOnInit(): void {
    this.toolbar.checkLogIn();
  }

}
