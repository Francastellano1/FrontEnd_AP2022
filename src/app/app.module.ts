import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { LogoApComponent } from './components/logo-ap/logo-ap.component';
import { BannerComponent } from './components/banner/banner.component';
import { AcercadeComponent } from './components/acercade/acercade.component';
import { ExperienciaComponent } from './components/experiencia/experiencia.component';
import { EducationComponent } from './components/education/education.component';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { SkillsComponent } from './components/skills/skills.component';
import { ProyectoComponent } from './components/proyecto/proyecto.component';
import { FooterComponent } from './components/footer/footer.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { interceptorProvider } from './service/interceptor-service';
import { NewExperienciaComponent } from './components/experiencia/new-experiencia.component';
import { EditExperienciaComponent } from './components/experiencia/edit-experiencia.component';
import { NewEducacionComponent } from './components/education/new-educacion.component';
import { EditEducacionComponent } from './components/education/edit-educacion.component';
import { NewproyectoComponent } from './components/proyecto/newproyecto.component';
import { EditProyectoComponent } from './components/proyecto/editproyecto.component';
import { NewSkillsComponent } from './components/skills/new-skills.component';
import { EditSkillsComponent } from './components/skills/edit-skills.component';
import { EditPersonaComponent } from './components/acercade/edit-persona.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LogoApComponent,
    BannerComponent,
    AcercadeComponent,
    ExperienciaComponent,
    EducationComponent,
    SkillsComponent,
    ProyectoComponent,
    FooterComponent,
    HomeComponent,
    LoginComponent,
    NewExperienciaComponent,
    EditExperienciaComponent,
    NewEducacionComponent,
    EditEducacionComponent,
    NewproyectoComponent,
    EditProyectoComponent,
    NewSkillsComponent,
    EditSkillsComponent,
    EditPersonaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgCircleProgressModule.forRoot({
      "radius": 100
    }),
    HttpClientModule   
  ],
  providers: [
    interceptorProvider
  ], 
  bootstrap: [AppComponent]
})
export class AppModule { }
