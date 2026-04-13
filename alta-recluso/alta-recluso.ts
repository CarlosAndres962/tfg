import { Component } from '@angular/core';
import { ReoService } from '../../services/reo';
@Component({
  selector: 'app-alta-recluso',
  imports: [],
  templateUrl: './alta-recluso.html',
  styleUrls: ['./alta-recluso.css'],
})
export class AltaRecluso {
   recluso = {
    nombre: '',
    apellido: '',   
    edad: 0,
    delito: ''
  };
  constructor(private reoService: ReoService) {}

  altaRecluso() {
   this.reoService.crearReo(this.recluso).subscribe({
      next: res => {
        console.log('Recluso creado', res);
        alert('Recluso dado de alta');
      },
      error: err => console.error(err)
    });
  }

}
