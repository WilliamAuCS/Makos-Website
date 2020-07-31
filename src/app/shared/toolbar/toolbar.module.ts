import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolbarComponent } from './toolbar.component';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';

@NgModule({
  declarations: [ToolbarComponent],
  imports: [
    CommonModule, 
    AppRoutingModule,
    MatToolbarModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule, 
    MatMenuModule,
  ], 
  exports: [ToolbarComponent]
})
export class ToolbarModule { }
