import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../Servicio/api.service';  // Asegúrate de que el servicio esté importado
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-inicio',
  standalone: true,
  providers: [ApiService],
  imports: [HttpClientModule, CommonModule, ReactiveFormsModule],
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
  data: any[] = []; 
  fundaciones: any[] = [];
  tipoAnimales: any[] = [];
  adoptantes: any[] = [];

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.apiService.getAllVacunas().subscribe({
      next: (data) => {
        console.log(data);
        this.data = data;  
      },
      error: (err) => {
        console.error('Error al obtener las vacunas:', err);
      }
    });

    this.apiService.getAllFundaciones().subscribe({
      next: (fundaciones) => {
        console.log(fundaciones);
        this.fundaciones = fundaciones; 
      },
      error: (err) => {
        console.error('Error al obtener las fundaciones:', err);
      }
      
    });

    this.apiService.getAllTipoAnimal().subscribe({
      next: (tipoAnimal) => {
        console.log(tipoAnimal);
        this.tipoAnimales = tipoAnimal; 
      },
      error: (err) => {
        console.error('Error al obtener el tipo de animal:', err);
      }
    });

    this.apiService.getAllAdoptantes().subscribe({
      next: (adoptantes) => {
        console.log(adoptantes);
        this.adoptantes = adoptantes; 
      },
      error: (err) => {
        console.error('Error al obtener el adopdante:', err);
      }
    });
  }
}
