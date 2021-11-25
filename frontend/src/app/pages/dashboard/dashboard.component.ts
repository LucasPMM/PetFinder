import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { PetService } from "src/app/services/pets/pets.service";
import { logout } from "src/app/stores/auth/auth.actions";
import { AppState } from "src/app/stores/reducers";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.scss"],
  providers: [PetService],
})
export class DashboardComponent implements OnInit {
  constructor(private store: Store<AppState>) {}

  public logout() {
    this.store.dispatch(logout({}));
  }

  ngOnInit(): void {}
}
