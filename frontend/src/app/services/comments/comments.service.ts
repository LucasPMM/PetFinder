import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: "root",
})
export class CommentsService {
  constructor(private httpClient: HttpClient) {}

  public createComment(payload: any): Promise<any> {
    return this.httpClient
      .post(`${environment.url}/comments`, payload)
      .toPromise();
  }
}
