import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GalleryComponent } from './gallery.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [GalleryComponent],
  imports: [
    CommonModule, 
    MatCardModule,
    MatButtonModule,
  ]
})
export class GalleryModule { }
