import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/servicios/portfolio.service';

@Component({
  selector: 'app-mi-habilidad',
  templateUrl: './mi-habilidad.component.html',
  styleUrls: ['./mi-habilidad.component.css']
})
export class MiHabilidadComponent implements OnInit{
  habilidades: any = [];

  constructor(private portfolioService: PortfolioService) {}

  ngOnInit(): void{
    this.portfolioService.getDatos().subscribe(portfolio =>{
      console.log(portfolio);
      //definir información a mostrar
      this.habilidades=portfolio.habilidades;
    });
  }

}
