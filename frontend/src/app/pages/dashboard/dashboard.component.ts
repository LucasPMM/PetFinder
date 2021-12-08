import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { PetItem } from "src/app/models/pets";
import { logout } from "src/app/stores/auth/auth.actions";
import { petsRequested } from "src/app/stores/pets/pets.actions";
import { getPetsList } from "src/app/stores/pets/pets.selectors";
import { AppState } from "src/app/stores/reducers";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.scss"],
  providers: [],
})
export class DashboardComponent implements OnInit {
  constructor(private store: Store<AppState>) {}

  public pets$: Observable<PetItem[]>;

  public logout() {
    this.store.dispatch(logout({}));
  }

  public getPets() {
    this.store.dispatch(petsRequested({}));
  }

  ngOnInit(): void {
    this.pets$ = this.store.select(getPetsList);
    this.getPets();
  }
}
