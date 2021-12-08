import { Pipe, PipeTransform } from "@angular/core";
import { DomSanitizer } from "@angular/platform-browser";

@Pipe({
  name: "safeHtml",
})
export class SafeHtmlPipe implements PipeTransform {
  constructor(private sanitizer: DomSanitizer) {}

  transform(value: any, args?: any): any {
    if (!value) {
      return "./../../../../../assets/images/default-dog.png";
    }
    return this.sanitizer.bypassSecurityTrustUrl(value);
  }
}
