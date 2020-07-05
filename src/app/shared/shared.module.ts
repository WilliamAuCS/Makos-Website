import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReactiveFormsModule } from '@angular/forms';
import { MatToolbarModule } from '@angular/material/toolbar';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { ToolbarModule } from './toolbar/toolbar.module';
import { AppRoutingModule } from '../app-routing.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ReactiveFormsModule, 
    MatToolbarModule,
    ToolbarModule,
    AppRoutingModule,
  ], 
  exports: [
    ReactiveFormsModule, 

    ToolbarModule,
    AppRoutingModule,
  ]
})
export class SharedModule { }
