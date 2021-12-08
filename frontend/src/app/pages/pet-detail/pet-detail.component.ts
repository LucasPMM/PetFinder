import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { PetsService } from "src/app/services/pets/pets.service";
import { AppState } from "src/app/stores/reducers";
import { ActivatedRoute } from "@angular/router";
import { getAuthLoggedUser } from "src/app/stores/auth/auth.selectors";
import { first } from "rxjs/operators";
import { PetItem } from "src/app/models/pets";
import { getPetsList } from "src/app/stores/pets/pets.selectors";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: "app-pet-detail",
  templateUrl: "./pet-detail.component.html",
  styleUrls: ["./pet-detail.component.scss"],
  providers: [PetsService],
})
export class PetDetailComponent implements OnInit {
  public method: "create" | "detail" | "update" = "create";
  public isOwner = false;
  public pet: PetItem = null;
  public petForm: FormGroup = this.formBuilder.group({
    name: ["", [Validators.required]],
    breed: ["", [Validators.required]],
    age: ["", [Validators.required]],
    gender: ["", [Validators.required]],
    species: ["", [Validators.required]],
    description: ["", [Validators.required]],
  });

  constructor(
    private store: Store<AppState>,
    private formBuilder: FormBuilder,
    private activatedRoute: ActivatedRoute
  ) {}

  public editPet() {
    this.isOwner && (this.method = "update");
  }

  public savePet() {
    this.isOwner && (this.method = "detail");
    // dispatch save
  }

  public defineMethod() {
    const param = this.activatedRoute.snapshot.paramMap.get("method");
    if (param === "create") {
      this.method = "create";
    } else {
      this.method = "detail";
      this.setIsOwner(Number(param));
    }
  }

  public async setIsOwner(petId: number) {
    const petsList = await this.store
      .select(getPetsList)
      .pipe(first())
      .toPromise();
    const selectedPet = petsList?.find((item) => item?.id === petId);
    this.pet = selectedPet;
    const loggedUser = await this.store
      .select(getAuthLoggedUser)
      .pipe(first())
      .toPromise();

    this.isOwner = loggedUser?.email === this.pet?.userEmail;
  }

  ngOnInit(): void {
    this.defineMethod();
  }
}

// TODO:
// - show info if 'detail'
// - show form if 'create'
// - allow edit if 'edit'
