import {Component, OnInit} from '@angular/core';
import {MovieService} from "../service/movie.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  constructor(private movieService: MovieService) {}

  ngOnInit(): void {
    this.movieService.loadMovies(1).subscribe(response => {
      alert("Movies count is: " + response.results.length)
    }, (error: any) => {
      console.log(error);
    });
  }
}
