import { Component, OnInit } from '@angular/core';
import { Serie } from '../shared/modele/serie';
import { SerieServiceService } from '../shared/service/serie-service.service';

@Component({
  selector: 'app-series',
  templateUrl: './series.component.html',
  styleUrls: ['./series.component.css']
})
export class SeriesComponent implements OnInit {

  series : Serie[] = [];

  constructor(private serieService: SerieServiceService) { }

  ngOnInit(): void {
    this.serieService.getSeries().subscribe((series: any) =>{
      this.series=series.results;
      console.log(this.series);  
    })
  }

}
