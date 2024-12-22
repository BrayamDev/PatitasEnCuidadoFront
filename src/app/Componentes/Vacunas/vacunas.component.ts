import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../Servicio/api.service';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common'; // Importa CommonModule aquí
import { DatePipe } from '@angular/common'; // Importa DatePipe

@Component({
  selector: 'app-vacunas',
  standalone: true,
  providers: [ApiService, DatePipe], // Asegúrate de agregar DatePipe aquí
  imports: [ReactiveFormsModule, HttpClientModule, CommonModule],
  templateUrl: './vacunas.component.html',
  styleUrls: ['./vacunas.component.css']
})
export class VacunasComponent implements OnInit {
  data: any[] = [];

  constructor(private apiService: ApiService, private datePipe: DatePipe) {}

  ngOnInit(): void {
    this.apiService.getAllVacunas().subscribe({
      next: (data) => {
        console.log(data);
        this.data = data.map(vacuna => ({
          ...vacuna,
          fechaCaducidad: new Date(vacuna.fechaCaducidad) // Convierte a Date si es necesario
        }));
      },
      error: (err) => {
        console.error('Error al obtener las vacunas:', err);
      }
    });
  }
}
