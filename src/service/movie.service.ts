import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {ApiResponse} from "../resource/api-response";
import {getMoviesUrl} from "../resource/constant";

@Injectable({providedIn: 'root'})
export class MovieService {

  constructor(private http: HttpClient) {
  }

  loadMovies(page: number) {
    return this.http.get<ApiResponse>(getMoviesUrl + page);
  }

}
