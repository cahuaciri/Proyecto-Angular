import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/servicios/portfolio.service';

@Component({
  selector: 'app-mi-experiencia',
  templateUrl: './mi-experiencia.component.html',
  styleUrls: ['./mi-experiencia.component.css']
})
export class MiExperienciaComponent implements OnInit {

  experiencias: any = [];

  constructor (private portfolioService: PortfolioService) {}

  ngOnInit(): void {
    this.portfolioService.getDatos().subscribe(portfolio =>{
      console.log(portfolio);
      //definir información a mostrar
      this.experiencias=portfolio.experiencias;
    });
  }
}
