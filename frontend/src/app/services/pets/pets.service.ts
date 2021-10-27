import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: "root",
})
export class PetService {
  constructor(private httpClient: HttpClient) {}

  public getPets(): Promise<any> {
    return this.httpClient.get(`${environment.url}/pets`).toPromise();
  }

  public createPet(payload: any): Promise<any> {
    return this.httpClient.post(`${environment.url}/pets`, payload).toPromise();
  }
}
