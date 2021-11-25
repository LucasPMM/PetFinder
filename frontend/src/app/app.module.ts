import { BrowserModule } from "@angular/platform-browser";
import { NgModule, LOCALE_ID } from "@angular/core";
import { AppRoutingModule, routes } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { environment } from "../environments/environment";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { HttpClient, HttpClientModule } from "@angular/common/http";
import { RouterModule } from "@angular/router";
import { ToasterModule } from "angular2-toaster";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";

// Firebase
import { provideFirebaseApp, getApp, initializeApp } from "@angular/fire/app";
import { getFirestore, provideFirestore } from "@angular/fire/firestore";

// Translate
import pt from "@angular/common/locales/pt";
import { TranslateModule, TranslateLoader } from "@ngx-translate/core";
import { TranslateHttpLoader } from "@ngx-translate/http-loader";
export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, "./assets/i18n/", ".json");
}
import { registerLocaleData } from "@angular/common";
registerLocaleData(pt);

// Redux:
import { StoreModule, ActionReducer, MetaReducer } from "@ngrx/store";
import { EffectsModule } from "@ngrx/effects";
import { StoreDevtoolsModule } from "@ngrx/store-devtools";
import { localStorageSync } from "ngrx-store-localstorage";
import { effects } from "./stores/effects";
import { reducers } from "./stores/reducers";

export function localStorageSyncReducer(
  reducer: ActionReducer<any>
): ActionReducer<any> {
  return localStorageSync({
    keys: [{ auth: ["loggedUser"] }],
    rehydrate: true,
  })(reducer);
}
const metaReducers: Array<MetaReducer<any, any>> = [localStorageSyncReducer];

// Pages:
import { DashboardModule } from "./pages/dashboard/dashboard.module";
import { LoginModule } from "./pages/login/login.module";
import { RegisterModule } from "./pages/register/register.module";
import { AngularFireModule } from "@angular/fire/compat";
import { AngularFireAuthModule } from "@angular/fire/compat/auth";
import { ForgotPasswordModule } from "./pages/forgot-password/forgot-password.module";
import { ComponentsModule } from "./components/components.module";

@NgModule({
  declarations: [AppComponent],
  imports: [
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideFirestore(() => getFirestore()),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    StoreModule.forRoot(reducers, { metaReducers }),
    EffectsModule.forRoot(effects),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
    }),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: createTranslateLoader,
        deps: [HttpClient],
      },
    }),
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forChild(routes),
    ToasterModule.forRoot(),
    FontAwesomeModule,
    ComponentsModule,
    DashboardModule,
    LoginModule,
    RegisterModule,
    ForgotPasswordModule,
    FontAwesomeModule,
  ],
  providers: [Storage, { provide: LOCALE_ID, useValue: "pt-BR" }],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor() {}
}
