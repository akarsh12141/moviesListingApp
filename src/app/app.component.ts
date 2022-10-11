import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Details } from './details';
import { Locations } from './location';
import { MoviesService } from './movies.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  // title = 'movieslistingApp';
  isMoviesPage = false;
  

  public details : Details[]= [] ;
  public location : Locations[]= [];
  constructor(private moviesService : MoviesService){}

  ngOnInit(): void {
    this.getMoviesDetails();
  }

  public getMoviesDetails() : void{
    this.moviesService.getDetails().subscribe({
      next:(response : Details[])=>{
        
        this.details = response;
      },
      error:(error :HttpErrorResponse) =>{
        alert(error.message);
      }
    }   
    )
  }

  public getLocation(movies:string) : void{
    this.moviesService.getLocationByName(movies).subscribe({
      next :(response : Locations[])=>{
        this.location=response;
        
      },
      error: (error : HttpErrorResponse)=>{
        alert(error.message);
      }
    }
    )
  }
  public viewMovies(movies :string){
    this.isMoviesPage = true;
    this.getLocation(movies);
  }

  
 
}
