import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { RegisterComponent } from './register.component';

import { HttpClientModule } from '@angular/common/http';
import { AuthService } from '../auth.service';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from "@angular/material/form-field";


@NgModule({
  declarations: [RegisterComponent],
  imports: [
    CommonModule, 
    SharedModule, 
    HttpClientModule,
    MatButtonModule,
    MatFormFieldModule, 
  ], 
  providers: [AuthService]
})
export class RegisterModule { }
