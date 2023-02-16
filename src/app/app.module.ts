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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
