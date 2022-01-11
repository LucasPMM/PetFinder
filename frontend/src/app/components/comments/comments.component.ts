import { Component, Input, OnInit, ViewChild } from "@angular/core";
import { Store } from "@ngrx/store";
import { first } from "rxjs/operators";
import { getAuthLoggedUser } from "src/app/stores/auth/auth.selectors";
import { createCommentRequested } from "src/app/stores/comments/comments.actions";
import { AppState } from "src/app/stores/reducers";

@Component({
  selector: "app-comments",
  templateUrl: "./comments.component.html",
  styleUrls: ["./comments.component.scss"],
})
export class CommentsComponent implements OnInit {
  @Input() comments = [];
  @Input() petId;
  @ViewChild("commentContent") commentContent;

  constructor(private store: Store<AppState>) {}

  public async createComment() {
    const loggedUser = await this.store
      .select(getAuthLoggedUser)
      .pipe(first())
      .toPromise();
    const payload = {
      petId: this.petId,
      userId: loggedUser?.email,
      content: this.commentContent.nativeElement.value,
    };
    this.store.dispatch(
      createCommentRequested({
        payload,
      })
    );
    this.comments.push(payload);
    this.commentContent.nativeElement.value = "";
  }

  ngOnInit() {
    console.log("chegou no", this.comments);
  }
}
