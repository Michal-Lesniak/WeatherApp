import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { WeatherDataModel } from 'src/app/models/weather-models';

@Injectable({
  providedIn: 'root'
})
export class WeatherService { 

  constructor(private http:HttpClient) { }

  getWeatherData( cityName:string ): Observable<WeatherDataModel> {
    return this.http.get<WeatherDataModel>( `https://api.openweathermap.org/data/2.5/weather`,{
      params: new HttpParams()
      .set('q', cityName)
      .set('appid', 'ff1bc4683fc7325e9c57e586c20cc03e')
    })

 

}
}
