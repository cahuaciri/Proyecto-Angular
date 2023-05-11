import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/servicios/portfolio.service';

@Component({
  selector: 'app-mi-educacion',
  templateUrl: './mi-educacion.component.html',
  styleUrls: ['./mi-educacion.component.css']
})
export class MiEducacionComponent implements OnInit {
  
  //inicilizar variables de instancia
  educaciones: any = [];
  
  //inyectar el servicio para tener acceso en la clase a los metodos
  constructor(private portfolioService: PortfolioService) { }

  ngOnInit(): void{
    //esto es almacenar en la variable de instancia los datos recuperados por el servicio?
    this.portfolioService.getDatos().subscribe(portfolio =>{
      console.log(portfolio);
      //definir información a mostrar
      this.educaciones=portfolio.educaciones;
    });
  }

}


