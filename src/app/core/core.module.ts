import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthGuard, TokenGuard } from './guards/auth.guard';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptorService } from './interceptor/token-interceptor.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule, 
  ], 
  providers: [AuthGuard, TokenGuard,
  {
    provide: HTTP_INTERCEPTORS, 
    useClass: TokenInterceptorService, 
    multi: true
  }],
})
export class CoreModule { }
