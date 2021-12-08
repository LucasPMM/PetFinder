import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { SafeHtmlPipe } from "./safeHtml/safe-html.pipe";

@NgModule({
  declarations: [SafeHtmlPipe],
  exports: [SafeHtmlPipe],
  imports: [CommonModule, FontAwesomeModule, RouterModule.forChild([])],
})
export class PipesModule {}
