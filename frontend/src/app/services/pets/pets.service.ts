import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: "root",
})
export class PetsService {
  constructor(private httpClient: HttpClient) {}

  public getPets(): Promise<any> {
    return this.httpClient.get(`${environment.url}/pets`).toPromise();
  }

  public getPet(id: number): Promise<any> {
    return this.httpClient.get(`${environment.url}/pets/${id}`).toPromise();
  }

  public createPet(payload: any): Promise<any> {
    return this.httpClient.post(`${environment.url}/pets`, payload).toPromise();
  }

  public deletePet(id: number): Promise<any> {
    return this.httpClient.delete(`${environment.url}/pets/${id}`).toPromise();
  }

  public updatePet(id: number, payload: any): Promise<any> {
    return this.httpClient
      .put(`${environment.url}/pets/${id}`, payload)
      .toPromise();
  }
}
