import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Store } from "@ngrx/store";
import { ToasterService } from "angular2-toaster";
import { Credentials } from "src/app/models/auth";
import { AuthService } from "src/app/services/auth/auth.service";
import { loginCompleted } from "src/app/stores/auth/auth.actions";
import { AppState } from "src/app/stores/reducers";

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.scss"],
})
export class RegisterComponent implements OnInit {
  public registerForm: FormGroup = this.formBuilder.group({
    email: ["", [Validators.email, Validators.required]],
    password: ["", [Validators.required, Validators.minLength(3)]],
  });

  constructor(
    private formBuilder: FormBuilder,
    private store: Store<AppState>,
    private toasterService: ToasterService,
    private authService: AuthService
  ) {}

  public async register(): Promise<void> {
    try {
      const value = this.registerForm.value as Credentials;
      const user = await this.authService.registerUser(value);
      this.store.dispatch(loginCompleted({ user }));
    } catch (e) {
      this.toasterService.pop(
        "error",
        "Erro no registro",
        "Confira suas credenciais ou tente novamente mais tarde"
      );
      console.log("login error", e);
    }
  }

  ngOnInit() {}
}
