import { Injectable } from "@angular/core";
import { ToasterService } from "angular2-toaster";

@Injectable({
  providedIn: "root",
})
export class UtilsService {
  constructor(private toasterService: ToasterService) {}

  public handleError(error: any) {
    if (error && error.status) {
      console.error("Server error ->", error.status);
      this.showToast(error.status);
      return;
    }
    this.showToast("Desculpe, um erro local aconteceu");
  }

  private showToast(errorStatus: string): void {
    const errorMessage = "Desculpe, um erro inesperado aconteceu";
    this.toasterService.pop("error", errorMessage);
  }
}
