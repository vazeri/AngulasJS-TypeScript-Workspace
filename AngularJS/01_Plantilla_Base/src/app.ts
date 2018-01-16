//our root app component
import {Component, NgModule, VERSION} from '@angular/core'
import {BrowserModule} from '@angular/platform-browser'

@Component({
  selector: 'my-app',
  template: `
    <div>
      <h2>Hola {{nombre}}</h2>
      <h3>{{apellido}}</h3>
    </div>
  `,
})
export class App {

nombre:string = "Erick";
apellido:string = "Vázquez";
  }
}

@NgModule({
  imports: [ BrowserModule ],
  declarations: [ App ],
  bootstrap: [ App ]
})
export class AppModule {}