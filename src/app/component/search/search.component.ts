import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MovieApiServiceService } from 'src/app/service/movie-api-service.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent {
  // searchForm: FormGroup;
  moviesArray: any = [];
  constructor(private serv: MovieApiServiceService) {}
  searchForm = new FormGroup({
    movieName: new FormControl('', [Validators.pattern('[A-Za-z]{,1}')]),
  });

  submit() {
    console.log(this.searchForm.value, `#searchValue`);
    this.serv.searchApiData(this.searchForm.value).subscribe((result) => {
      console.log(this.searchForm.value, `##searchValue`);

      this.moviesArray = result.results;
    });
  }
}
