import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { PetsService } from "src/app/services/pets/pets.service";
import { AppState } from "src/app/stores/reducers";

@Component({
  selector: "app-pet-detail",
  templateUrl: "./pet-detail.component.html",
  styleUrls: ["./pet-detail.component.scss"],
  providers: [PetsService],
})
export class PetDetailComponent implements OnInit {
  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {}
}

// TODO:
// - show info if 'detail'
// - show form if 'create'
// - allow edit if 'edit'
