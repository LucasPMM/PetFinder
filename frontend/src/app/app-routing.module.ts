import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LoggedGuard } from "./guards/logged/logged.guard";
import { UnloggedGuard } from "./guards/unlogged/unlogged.guard";
import { DashboardComponent } from "./pages/dashboard/dashboard.component";
import { LoginComponent } from "./pages/login/login.component";
import { RegisterComponent } from "./pages/register/register.component";

export const routes: Routes = [
  {
    path: "",
    redirectTo: "/dashboard",
    pathMatch: "full",
  },
  {
    path: "login",
    component: LoginComponent,
    canActivate: [LoggedGuard],
  },
  {
    path: "register",
    component: RegisterComponent,
    canActivate: [LoggedGuard],
  },
  {
    path: "dashboard",
    component: DashboardComponent,
    canActivate: [UnloggedGuard],
  },
  { path: "**", redirectTo: "login" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
