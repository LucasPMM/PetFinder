import { Component, OnInit } from "@angular/core";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";
import { Store } from "@ngrx/store";
import { logout } from "src/app/stores/auth/auth.actions";
import { AppState } from "src/app/stores/reducers";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"],
})
export class HeaderComponent implements OnInit {
  public faCoffee = faCoffee;

  constructor(private store: Store<AppState>) {}

  public logout() {
    this.store.dispatch(logout({}));
  }

  ngOnInit() {}
}
