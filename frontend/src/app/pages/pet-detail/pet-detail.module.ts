import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { PetDetailComponent } from "./pet-detail.component";
import { RouterModule } from "@angular/router";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

@NgModule({
  declarations: [PetDetailComponent],
  exports: [PetDetailComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([]),
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class PetDetailModule {}
