import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { RegisterComponent } from './register.component';

import { HttpClientModule } from '@angular/common/http';
import { AuthService } from '../auth.service';


@NgModule({
  declarations: [RegisterComponent],
  imports: [
    CommonModule, 
    SharedModule, 
    HttpClientModule,
  ], 
  providers: [AuthService]
})
export class RegisterModule { }
