import { Component } from '@angular/core';
import { ApiService } from '../../Servicio/api.service';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-tipo-animal',
  standalone: true,
  providers: [ApiService],
  imports: [ReactiveFormsModule, HttpClientModule, CommonModule],
  templateUrl: './tipo-animal.component.html',
  styleUrl: './tipo-animal.component.css'
})
export class TipoAnimalComponent {
  tipoAnimales: any[] = [];

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.apiService.getAllTipoAnimal().subscribe({
      next: (tipoAnimal) => {
        console.log(tipoAnimal);
        this.tipoAnimales = tipoAnimal;
      },
      error: (err) => {
        console.error('Error al obtener las fundaciones:', err);
      }
    });
  }
}
