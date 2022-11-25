import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Details } from './details';
import { Locations } from './location';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
 
  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) { }

  public getDetails(): Observable<Details[]> {
    return this.http.get<Details[]>(`${this.apiServerUrl}/moviesDetails/allDetails`);
  }

  public getDetailsLocationAsc(): Observable<Details[]> {
    return this.http.get<Details[]>(`${this.apiServerUrl}/moviesDetails/allDetailsLocationAsc`);
  }

  public getDetailsSort(orderBy: string,column : string ): Observable<Details[]> {
    return this.http.get<Details[]>(`${this.apiServerUrl}/moviesDetails/allDetailsSort/${orderBy}/${column}`);
  }

  public addDeatils(details : Details): Observable<Details>{
    return this.http.post<Details>(`${this.apiServerUrl}/moviesDetails/addDetails`,details);
  }

  public addLocation(locations :Locations): Observable<Locations>{
    return this.http.post<Locations>(`${this.apiServerUrl}/moviesLocation/addLocation`,locations);
  }

  public getLocationByName(name: string): Observable<Locations[]> {
    return this.http.get<Locations[]>(`${this.apiServerUrl}/moviesLocation/LoactionName/${name}`);
  }

  

}
