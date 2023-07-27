import { Component, OnInit } from '@angular/core';
import { MovieApiServiceService } from 'src/app/service/movie-api-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor(private serv: MovieApiServiceService) {}
  bannerResult: any = [];
  trndingResult: any = [];
  actionResult: any = [];
  adventeureResult: any = [];
  animationResult: any = [];
  comdyResult: any = [];
  documentaryResult: any = [];
  scieceResult: any = [];
  thrillerResult: any = [];
  ngOnInit(): void {
    this.bannerData();
    this.trendindingData();
    this.actionData();
    this.adventeurData();
    this.animationData();
    this.comdyData();
    this.documentaryData();
    this.scienceFictionData();
    this.thrillerData();
  }
  // banner
  bannerData() {
    this.serv.banner().subscribe((result) => {
      console.log(result, 'apiData');
      this.bannerResult = result.results;
    });
  }
  // trending
  trendindingData() {
    this.serv.trendingApiData().subscribe((result) => {
      console.log(result, 'trendigResult');
      this.trndingResult = result.results;
    });
  }
  // action
  actionData() {
    this.serv.fetchActionMovies().subscribe((result) => {
      console.log(result, 'trendigResult');
      this.actionResult = result.results;
    });
  }
  // adventuer
  adventeurData() {
    this.serv.fetchAdventureMovies().subscribe((result) => {
      console.log(result, 'trendigResult');
      this.adventeureResult = result.results;
    });
  }
  // animation
  animationData() {
    this.serv.fetchAnimationMovies().subscribe((result) => {
      console.log(result, 'trendigResult');
      this.animationResult = result.results;
    });
  }
  // comdy
  comdyData() {
    this.serv.fetchComedyMovies().subscribe((result) => {
      console.log(result, 'trendigResult');
      this.comdyResult = result.results;
    });
  }
  // documentary
  documentaryData() {
    this.serv.fetchDocumentaryMovies().subscribe((result) => {
      console.log(result, 'trendigResult');
      this.documentaryResult = result.results;
    });
  }
  // science-fiction
  scienceFictionData() {
    this.serv.fetchScienceFictionMovies().subscribe((result) => {
      console.log(result, 'trendigResult');
      this.scieceResult = result.results;
    });
  }
  // thriller
  thrillerData() {
    this.serv.fetchThrillerMovies().subscribe((result) => {
      console.log(result, 'trendigResult');
      this.thrillerResult = result.results;
    });
  }
}
