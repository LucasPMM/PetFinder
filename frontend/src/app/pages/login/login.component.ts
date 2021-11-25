import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Store } from "@ngrx/store";
import { ToasterService } from "angular2-toaster";
import { Observable } from "rxjs";
import { Credentials } from "src/app/models/auth";
import { loginRequested } from "src/app/stores/auth/auth.actions";
import { getAuthIsLoading } from "src/app/stores/auth/auth.selectors";
import { AppState } from "src/app/stores/reducers";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
})
export class LoginComponent implements OnInit {
  public loginForm: FormGroup = this.formBuilder.group({
    email: ["", [Validators.email, Validators.required]],
    password: ["", [Validators.required, Validators.minLength(3)]],
  });
  public isLoading$: Observable<boolean>;

  constructor(
    private formBuilder: FormBuilder,
    private toasterService: ToasterService,
    private store: Store<AppState>
  ) {}

  public async login(): Promise<void> {
    try {
      const credential = this.loginForm.value as Credentials;
      this.store.dispatch(loginRequested({ credential }));
    } catch (e) {
      this.toasterService.pop(
        "error",
        "Erro no login",
        "Confira suas credenciais ou tente novamente mais tarde"
      );
      console.log("login error", e);
    }
  }

  ngOnInit() {
    this.isLoading$ = this.store.select(getAuthIsLoading);
  }
}
