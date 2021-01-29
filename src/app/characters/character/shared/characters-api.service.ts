import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: "root",
})
export class CharactersApiService {
  PUBLIC_KEY = "7e0c2df8626789070fe175d6c7b4dd03";
  HASH = "01ea48a3bcc2b467e4cba9a94bfc559f";
  BASE_URL_API = "https:gateway.marvel.com/v1/public/characters";
  COMPLEMENT_URL_API = `?ts=1&apikey=${this.PUBLIC_KEY}&hash=${this.HASH}`;

  constructor(private http: HttpClient) {}

  getAllCharacters(): Observable<any> {
    return this.http
      .get<any>(this.BASE_URL_API + this.COMPLEMENT_URL_API)
      .pipe(map((data: any) => data.data.results));
  }
}
