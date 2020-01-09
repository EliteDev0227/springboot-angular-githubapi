import { Injectable, Injector } from "@angular/core";
import {
  HttpClient,
  HttpHeaders,
  HttpEventType,
  HttpParams
} from "@angular/common/http";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class APIService {
  httpOptions = {
    headers: new HttpHeaders({
      "Content-Type": "application/json"
    })
  };

  constructor(private http: HttpClient) {}

  public GetCommits(): Observable<any> {
    var url = "http://192.168.1.15:8080/api/commits";
    return this.http.get(url, this.httpOptions).pipe(
      map((res: any) => {
        return res;
      })
    );
  }
}
