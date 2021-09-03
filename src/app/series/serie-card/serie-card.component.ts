import { Component, Input, OnInit } from '@angular/core';
import { Serie } from 'src/app/shared/modele/serie';

@Component({
  selector: 'app-serie-card',
  templateUrl: './serie-card.component.html',
  styleUrls: ['./serie-card.component.css']
})
export class SerieCardComponent implements OnInit {

  @Input() serie!: Serie;

  constructor() { }

  ngOnInit(): void {
  }

}
