import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthenticationModule } from './authentication/authentication.module';
import { HomeModule } from './home/home.module';
import { GalleryModule } from './gallery/gallery.module';
import { MyAccountModule } from './my-account/my-account.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule, 
    AuthenticationModule, 
    HomeModule,
    GalleryModule,
    MyAccountModule,
  ]
})
export class ModulesModule { }
