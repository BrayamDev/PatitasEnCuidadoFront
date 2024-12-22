import { Component } from '@angular/core';
import { ApiService } from '../../Servicio/api.service';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-adoptantes',
  standalone: true,
  providers: [ApiService],
  imports: [HttpClientModule, CommonModule, ReactiveFormsModule],
  templateUrl: './adoptantes.component.html',
  styleUrl: './adoptantes.component.css'
})
export class AdoptantesComponent {
  adoptantes: any[] = [];

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.apiService.getAllAdoptantes().subscribe({
      next: (adoptantes) => {
        console.log(adoptantes);
        this.adoptantes = adoptantes;
      },
      error: (err) => {
        console.error('Error al obtener el adoptante:', err);
      }
    });
  }
}
