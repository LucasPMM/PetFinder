import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { PetDetailComponent } from "./pet-detail.component";
import { RouterModule } from "@angular/router";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { PipesModule } from "src/app/pipes/pipes.module";

@NgModule({
  declarations: [PetDetailComponent],
  exports: [PetDetailComponent],
  imports: [
    CommonModule,
    PipesModule,
    RouterModule.forChild([]),
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class PetDetailModule {}
