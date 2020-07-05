import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterModule } from './register/register.module';
import { LoginModule } from './login/login.module';
import { EventsModule } from './events/events.module';
import { SpecialEventsModule } from './special-events/special-events.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule, 
    RegisterModule, 
    LoginModule,
    EventsModule,
    SpecialEventsModule,
  ]
})
export class AuthenticationModule { }
