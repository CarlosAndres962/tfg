import { Component } from '@angular/core';

@Component({
  selector: 'app-modificar-recluso',
  imports: [],
  templateUrl: './modificar-recluso.html',
  styleUrl: './modificar-recluso.css',
})
export class ModificarRecluso {
   recluso = {
    id: 0,
    nombre: '',
    apellido: '',
    edad: 0,
    delito: ''
  };

  modificarRecluso() {
    console.log('Recluso modificado:', this.recluso);
    // Llamada a API PUT
  }

}
