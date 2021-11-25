import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ForgotPasswordComponent } from "./forgot-password.component";
import { RouterModule } from "@angular/router";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

@NgModule({
  declarations: [ForgotPasswordComponent],
  exports: [ForgotPasswordComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([]),
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class ForgotPasswordModule {}
