import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about/about.component';
import { GalleryComponent } from './gallery/gallery.component';
import { LfiComponent } from './lfi/lfi.component';
import { EducationComponent } from './education/education.component';



@NgModule({
  declarations: [AboutComponent, GalleryComponent, LfiComponent, EducationComponent],
  imports: [
    CommonModule
  ]
})
export class ModulesModule { }
