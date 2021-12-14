import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HeaderComponent } from "./header/header.component";
import { FooterComponent } from "./footer/footer.component";
import { RouterModule } from "@angular/router";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { CommentsComponent } from "./comments/comments.component";

@NgModule({
  declarations: [HeaderComponent, FooterComponent, CommentsComponent],
  exports: [HeaderComponent, FooterComponent, CommentsComponent],
  imports: [CommonModule, FontAwesomeModule, RouterModule.forChild([])],
})
export class ComponentsModule {}
