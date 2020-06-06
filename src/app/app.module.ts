import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './modules/home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule } from '@angular/router';
import { ToolbarComponent } from './core/toolbar/toolbar.component';
import { AboutComponent } from './modules/about/about.component';
import { DIYKitsComponent } from './modules/diy-kits/diy-kits.component';
import { LfiComponent } from './modules/lfi/lfi.component';
import { EducationComponent } from './modules/education/education.component';
import { GalleryComponent } from './modules/gallery/gallery.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ToolbarComponent,
    DIYKitsComponent,
    EducationComponent, 
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule, 
    MatToolbarModule, 
    RouterModule.forRoot([
      { path: '', component: HomeComponent }, 
      { path: 'About', component: AboutComponent},
      { path: 'Gallery', component: GalleryComponent},
      { path: 'DIY_Kits', component: DIYKitsComponent},
      { path: 'Luxury_Finished_Items', component: LfiComponent},
      { path: 'Education', component: EducationComponent},
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
