import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NasaService } from './nasa.service';
import { Nasa } from './models/nasa.model';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'nasa_challenge';

  nasaPicture!: Nasa;

  constructor(private nasaService: NasaService) { }
  
  ngOnInit(): void {
    this.nasaService.getImageOfTheDay().subscribe(dataFromApi => {
      this.nasaPicture = dataFromApi;
    })
  }
}
