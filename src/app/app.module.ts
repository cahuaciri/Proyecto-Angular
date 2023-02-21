import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RedesComponent } from './redes/redes.component';
import { LoginComponent } from './modals/login/login.component';
import { WatshappComponent } from './modals/watshapp/watshapp.component';
import { BannerComponent } from './banner/banner.component';
import { SobreMiComponent } from './secciones/sobre-mi/sobre-mi.component';
import { MiExperienciaComponent } from './secciones/mi-experiencia/mi-experiencia.component';
import { MiEducacionComponent } from './secciones/mi-educacion/mi-educacion.component';
import { MiHabilidadComponent } from './secciones/mi-habilidad/mi-habilidad.component';
import { MisProyectosComponent } from './secciones/mis-proyectos/mis-proyectos.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ErrorComponent } from './error/error.component';
import { IndexComponent } from './index/index.component';
import { NavbardashboardComponent } from './navbardashboard/navbardashboard.component';
import { BarradashboardComponent } from './barradashboard/barradashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    RedesComponent,
    LoginComponent,
    WatshappComponent,
    BannerComponent,
    SobreMiComponent,
    MiExperienciaComponent,
    MiEducacionComponent,
    MiHabilidadComponent,
    MisProyectosComponent,
    DashboardComponent,
    ErrorComponent,
    IndexComponent,
    NavbardashboardComponent,
    BarradashboardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
