import { Injectable, NgZone } from "@angular/core";
import { Credentials, User } from "src/app/models/auth";
import { AngularFireAuth } from "@angular/fire/compat/auth";
import { ToasterService } from "angular2-toaster";
import firebase from "firebase/compat/app";
import { Router } from "@angular/router";

const parseUser = (user: firebase.auth.UserCredential): User => {
  const { displayName, photoURL, email, phoneNumber } = user.user;
  return {
    email,
    name: displayName,
    pictureUrl: photoURL,
  };
};

@Injectable({
  providedIn: "root",
})
export class AuthService {
  constructor(
    private auth: AngularFireAuth,
    private router: Router,
    private ngZone: NgZone,
    private toasterService: ToasterService
  ) {}

  public async registerUser(value: Credentials): Promise<User> {
    try {
      const res = await this.auth.createUserWithEmailAndPassword(
        value.email,
        value.password
      );
      console.log("Registration", res);
      return parseUser(res);
    } catch (e) {
      this.toasterService.pop(
        "error",
        "Register error",
        "Erro ao registrar usuário. Tente novamente mais tarde"
      );
    }
    return null;
  }

  public async loginUser(value: Credentials): Promise<User> {
    try {
      const res: firebase.auth.UserCredential =
        await this.auth.signInWithEmailAndPassword(value.email, value.password);
      console.log("Login", res);
      return parseUser(res);
    } catch (e) {
      this.toasterService.pop(
        "error",
        "Login error",
        "Erro ao logar usuário. Tente novamente mais tarde"
      );
    }
    return null;
  }

  public async resetPassword({ email }): Promise<void> {
    await this.auth.sendPasswordResetEmail(email);
  }

  public async logout(): Promise<void> {
    this.ngZone.run(() => {
      this.ngZone.runOutsideAngular(() => {
        localStorage.clear();
        this.router.navigate(["login"]);
      });
    });
  }
}
