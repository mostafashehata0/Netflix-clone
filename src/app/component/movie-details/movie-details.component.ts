import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieApiServiceService } from 'src/app/service/movie-api-service.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css'],
})
export class MovieDetailsComponent implements OnInit {
  getMpvieDetailsResults: any;
  getMovieVideo: any;
  getMovieCast: any;
  constructor(
    private serv: MovieApiServiceService,
    private router: ActivatedRoute
  ) {}

  ngOnInit(): void {
    let getMovieID = this.router.snapshot.paramMap.get('pid');
    console.log(getMovieID, 'from router link');

    this.moviesResult(getMovieID);
    this.moviesVideo(getMovieID);
    this.moviesCasting(getMovieID);
  }

  moviesResult(id: any) {
    this.serv.moviesApiDetails(id).subscribe((result) => {
      console.log(result, 'result from api');
      this.getMpvieDetailsResults = result;
    });
  }

  moviesVideo(id: any) {
    this.serv.moviesApiVideo(id).subscribe((result) => {
      console.log(result, 'movies video');
      result.results.forEach((element: { type: string; key: any }) => {
        if (element.type == 'Trailer') {
          this.getMovieVideo = element.key;
        }
      });
    });
  }

  moviesCasting(id: any) {
    this.serv.movieApiCasting(id).subscribe((result) => {
      console.log(result, 'movie casting');
      this.getMovieCast = result.cast;
    });
  }
}
