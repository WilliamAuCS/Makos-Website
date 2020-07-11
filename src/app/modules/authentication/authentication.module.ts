import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterModule } from './register/register.module';
import { EventsModule } from './events/events.module';
import { SpecialEventsModule } from './special-events/special-events.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule, 
    RegisterModule,
    EventsModule,
    SpecialEventsModule,
  ]
})
export class AuthenticationModule { }
