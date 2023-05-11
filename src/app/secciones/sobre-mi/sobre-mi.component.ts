import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/servicios/portfolio.service';

@Component({
  selector: 'app-sobre-mi',
  templateUrl: './sobre-mi.component.html',
  styleUrls: ['./sobre-mi.component.css']
})
export class SobreMiComponent implements OnInit {
  //inicilizar variables de instancia
  nombre: string = '';
  apellido: string = '';
  sobre_mi: string = '';
  foto_perfil: string = '';

  //inyectar el servicio para tener acceso en la clase a los metodos
  constructor(private portfolioService: PortfolioService) {}
  
  ngOnInit(): void{
    //esto es almacenar en la variable de instancia los datos recuperados por el servicio?
    this.portfolioService.getDatos().subscribe(portfolio =>{
      console.log(portfolio);
      //definir información a mostrar
      this.nombre=portfolio.nombre;
      this.apellido=portfolio.apellido;
      this.sobre_mi=portfolio.sobre_mi;
      this.foto_perfil=portfolio.foto_perfil;
    });
  }
}
