import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/servicios/portfolio.service';

@Component({
  selector: 'app-mis-proyectos',
  templateUrl: './mis-proyectos.component.html',
  styleUrls: ['./mis-proyectos.component.css']
})
export class MisProyectosComponent implements OnInit{

  proyectos: any = [];

  constructor( private portfolioService: PortfolioService){

  }

  ngOnInit(): void {
    this.portfolioService.getDatos().subscribe(portfolio =>{
      console.log(portfolio);
      //definir información a mostrar
      this.proyectos=portfolio.proyectos;
    });
  }

}
