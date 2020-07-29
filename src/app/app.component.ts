import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  title = 'JA Makos';

  cookieMessage: string = "This site uses cookies to ensure you get the best experience on our website.";
  cookieDismiss: string = "Got it!";
  cookieLinkText: string = "Learn more";


  ngOnInit(): void {
    let cc = window as any;
    cc.cookieconsent.initialise({
      type: 'info',
      position: 'bottom',
      palette: {
        popup: {
          background: "#164969"
        },
        button: {
          background: "#ffe000",
          text: "#164969"
        }
      },
      theme: "classic",
      content: {
        message: this.cookieMessage,
        dismiss: this.cookieDismiss,
        link: this.cookieLinkText,
        //href: environment.Frontend + "/dataprivacy" 
      }
    });
  }

}
