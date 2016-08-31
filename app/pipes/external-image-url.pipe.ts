import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "externalImageURL"
})
export class ExternalImageURLPipe implements PipeTransform {

  transform(value: string): string {
    // Get pokemon Id
    let id = value.match(/\/[0-9]{1,3}\//)[0].replace(/\//g, "");
    return `/data/img/${this.addLeadingZeros(id, 3)}.png`;
  }

  addLeadingZeros(str: string, max: number): string {
    str = str.toString();
    return str.length < max ? this.addLeadingZeros("0" + str, max) : str;
  }
}
