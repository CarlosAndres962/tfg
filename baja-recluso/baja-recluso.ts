import { Component } from '@angular/core';
import { ReoService } from '../../services/reo';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-baja-recluso',
  imports: [FormsModule],
  templateUrl: './baja-recluso.html',
  styleUrls: ['./baja-recluso.css'],
  standalone: true
})
export class BajaRecluso {
   idRecluso: number = 0;
   constructor(private reoService: ReoService) {}


  bajaRecluso() {
    this.reoService.eliminarReo(this.idRecluso).subscribe({
      next: () => {
        console.log('Recluso eliminado');
        alert('Recluso dado de baja');
      },
      error: err => {
        console.error(err);
        alert('Error al eliminar');
      }
    });
  }
}
