import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  
  nombre = 'Andres';

  arreglo = [1,2,3,4,5,6,7,8,9];
  
  PI = Math.PI;

  a = 0.234;

  salario = 1234.5;

  heroe = {
    nombre: 'Logan',
    clave: 'wolverin',
    direccion: {
      calle: 'Primera',
      casa: '19'
    }
  };

  valorDePromesa = new Promise ( (resolve, reject) => {
    
    setTimeout( () => resolve('llego la data'), 3500 );

  } );

  fecha = new Date();

}
