import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/model/persona.model';
import { PersonaService } from 'src/app/service/persona.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-acercade',
  templateUrl: './acercade.component.html',
  styleUrls: ['./acercade.component.css']
})
export class AcercadeComponent implements OnInit {
  /* Llamamos al servicio desde el componente. Inicializamos el objeto */
  persona: Persona = new Persona("","","",""); /* parametros que se van a pasar para el objeto persona */

  /* el constructor va a llamar al servicio */
  constructor(public personaService: PersonaService, private tokenService: TokenService) { }
  isLogged = false;

  /* el subscribe es un metodo que ve siempre que hay un cambio en el Observable */
  /* lo que este en persona se va a guardar en data */
  ngOnInit(): void {
    this.getDataPersona();
    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }

  }

  getDataPersona(){
    this.personaService.getPersona().subscribe(data => {this.persona = data});
  }

}
