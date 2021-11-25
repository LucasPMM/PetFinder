import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { ToasterService } from "angular2-toaster";
import { Credentials } from "src/app/models/auth";
import { AuthService } from "src/app/services/auth/auth.service";

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
    private toasterService: ToasterService,
    private authService: AuthService
  ) {}

  public async register(): Promise<void> {
    try {
      const value = this.registerForm.value as Credentials;
      const res = await this.authService.registerUser(value);
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
