import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthenticationModule } from './authentication/authentication.module';
import { HomeModule } from './home/home.module';
import { GalleryModule } from './gallery/gallery.module';
import { MyAccountComponent } from './my-account/my-account.component';

@NgModule({
  declarations: [MyAccountComponent],
  imports: [
    CommonModule, 
    AuthenticationModule, 
    HomeModule,
    GalleryModule,
  ]
})
export class ModulesModule { }
