import { Component ,OnInit} from '@angular/core';
import { WeatherService } from 'src/services/weather.service';
import { WeatherDataModel } from '../models/weather-models';


@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit {

  constructor(private weatherService:WeatherService){}

  cityName: string = 'Wroclaw';
  data?: WeatherDataModel;
  
  
  ngOnInit(): void {
    this.weatherService.getWeatherData(this.cityName).subscribe({
      next: (response) => {
        this.data = response;
        this.data.main.temp -= 273.15;
        this.data.main.temp_min -= 273.15;
        this.data.main.temp_max -= 273.15;
        console.log(this.data);
      }
    });
    this.cityName = '';
}

onSubmit(): void {
  this.weatherService.getWeatherData(this.cityName).subscribe({
    next: (response) => {
      this.data = response;
      this.data.main.temp -= 273.15;
      this.data.main.temp_min -= 273.15;
      this.data.main.temp_max -= 273.15;
      console.log(this.data);
    }
  });
  this.cityName = '';
  
}

}
