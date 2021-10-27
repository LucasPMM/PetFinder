import { BrowserModule } from "@angular/platform-browser";
import { NgModule, LOCALE_ID } from "@angular/core";
import { AppRoutingModule, routes } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { environment } from "../environments/environment";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { HttpClient, HttpClientModule } from "@angular/common/http";
import { RouterModule } from "@angular/router";

import pt from "@angular/common/locales/pt";
import { TranslateModule, TranslateLoader } from "@ngx-translate/core";
import { TranslateHttpLoader } from "@ngx-translate/http-loader";
export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, "./assets/i18n/", ".json");
}
import { registerLocaleData } from "@angular/common";
registerLocaleData(pt);

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

import { DashboardModule } from "./pages/dashboard/dashboard.module";

@NgModule({
  declarations: [AppComponent],
  imports: [
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
    DashboardModule,
    HttpClientModule,
    RouterModule.forChild(routes),
  ],
  providers: [Storage, { provide: LOCALE_ID, useValue: "pt-BR" }],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor() {}
}
