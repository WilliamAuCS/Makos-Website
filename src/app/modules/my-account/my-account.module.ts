import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyAccountComponent, ConfirmDeleteDialog } from './my-account.component';
import { MatDialogModule } from "@angular/material/dialog";
import { MatButtonModule } from "@angular/material/button";

@NgModule({
  declarations: [MyAccountComponent, ConfirmDeleteDialog],
  imports: [
    CommonModule, 
    MatDialogModule, 
    MatButtonModule,
  ], 
  entryComponents: [MyAccountComponent, ConfirmDeleteDialog]
})
export class MyAccountModule { 

}
