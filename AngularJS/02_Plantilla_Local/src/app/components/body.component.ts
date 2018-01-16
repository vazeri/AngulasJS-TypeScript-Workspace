import { Component } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: 'body.component.html'

})
export class BodyComponent {
  title = 'AngularJS';
  nombre = 'Erick';
  descripcion = 'Documentación adicional';

mostrar:boolean = false;

  frase:any = {
    mensaje:"Un gran poder requiere una gran responsabilidad",
    autor:"StanLee",

  }

  personajes:any[] = ["Spiderman", "venom", "Octopus"]

}
