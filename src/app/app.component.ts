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
  public sortBy : string = "Asc";
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

  public getMoviesDetailsLocationAsc() : void{
    this.moviesService.getDetailsLocationAsc().subscribe({
      next:(response : Details[])=>{
        
        this.details = response;
      },
      error:(error :HttpErrorResponse) =>{
        alert(error.message);
      }
    }   
    )
  }

  public getMoviesSort(orderBy :string, column :string) : void{
    this.moviesService.getDetailsSort(orderBy , column).subscribe({
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
  public setFlag(){
    this.isMoviesPage = false;
  }
  public viewMovies(movies :string){
    this.isMoviesPage = true;
    this.getLocation(movies);
  }

  // public sort(){
  //  this.getMoviesDetailsLocationAsc()
  // }
 
  public sort(orderBy : string, column : string){
    if(orderBy==="Asc"){
      this.sortBy="Desc";
      
    }
    else{
      this.sortBy="Asc";
    }
    this.getMoviesSort(orderBy, column);
   }

   
}
