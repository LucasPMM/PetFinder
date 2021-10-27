import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { PetService } from "src/app/services/pets/pets.service";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.scss"],
  providers: [PetService],
})
export class DashboardComponent implements OnInit {
  constructor(private petService: PetService, private fb: FormBuilder) {}

  public petForm: FormGroup = this.fb.group({
    name: ["", [Validators.required, Validators.minLength(3)]],
  });

  public pets: any[] = [];

  public getPets = async () => {
    try {
      this.pets = await this.petService.getPets();
    } catch (e) {
      console.log("Something wrong happens!");
    }
  };

  ngOnInit(): void {
    this.getPets();
  }

  public createPet(): void {
    const payload = this.petForm.value;
    this.petService.createPet(payload);
  }
}
