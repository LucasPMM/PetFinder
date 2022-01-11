import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { PetsService } from "src/app/services/pets/pets.service";
import { AppState } from "src/app/stores/reducers";
import { ActivatedRoute, Router } from "@angular/router";
import { getAuthLoggedUser } from "src/app/stores/auth/auth.selectors";
import { first } from "rxjs/operators";
import { PetItem } from "src/app/models/pets";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import {
  createPetRequested,
  deletePetRequested,
  updatePetRequested,
} from "src/app/stores/pets/pets.actions";

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
  public petImage = null;

  public petForm: FormGroup = this.formBuilder.group({
    image: ["", [Validators.required]],
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
    private router: Router,
    private petsService: PetsService,
    private activatedRoute: ActivatedRoute
  ) {
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
  }

  public async create() {
    if (this.petForm.valid) {
      const loggedUser = await this.store
        .select(getAuthLoggedUser)
        .pipe(first())
        .toPromise();
      const payload = {
        ...this.petForm.value,
        userEmail: loggedUser?.email,
      };
      this.store.dispatch(createPetRequested({ payload }));
    }
  }

  public onImageChanged(event: any) {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = (e: any) => {
      const imageSrc = e.target.result;
      this.petImage = imageSrc;
      this.petForm.patchValue({ image: imageSrc });
    };
    reader.readAsDataURL(file);
  }

  public editPet() {
    this.isOwner && (this.method = "update");
  }

  public async savePet() {
    this.isOwner && (this.method = "detail");
    this.store.dispatch(
      updatePetRequested({ id: this.pet?.id, payload: this.petForm.value })
    );
  }

  public remove() {
    this.store.dispatch(deletePetRequested({ id: this?.pet?.id }));
  }

  private loadData(data) {
    this.petForm.patchValue({
      ...data,
    });
    this.petImage = data?.image;
  }

  private defineMethod() {
    const param = this.activatedRoute.snapshot.paramMap.get("method");
    if (param === "create") {
      this.method = "create";
    } else {
      this.method = "detail";
      this.setIsOwner(Number(param));
    }
  }

  private async setIsOwner(petId: number) {
    const pet = await this.petsService.getPet(petId);
    const parsedPet = {
      ...pet?.dataValues,
      comments: pet?.comments,
    };
    this.pet = parsedPet;
    const loggedUser = await this.store
      .select(getAuthLoggedUser)
      .pipe(first())
      .toPromise();

    this.loadData(parsedPet);
    this.isOwner = loggedUser?.email === this.pet?.userEmail;
  }

  ngOnInit(): void {
    this.defineMethod();
  }
}
