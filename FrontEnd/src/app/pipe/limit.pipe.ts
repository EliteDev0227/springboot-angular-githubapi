import { Pipe, PipeTransform } from "@angular/core";

@Pipe({ name: "limitTo" })
export class LimitToPipe implements PipeTransform {
  transform(value: string, limit?: number): string {
    var index = value.indexOf("\n");
    if (index < 0) index = value.length;
    if (index > limit) index = limit;
    return value.substr(0, index) + "  ...";
  }
}
