import { Component } from '@angular/core';
import { ApiService } from '../../Servicio/api.service';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-fundaciones',
  standalone: true,
  providers: [ApiService],
  imports: [HttpClientModule, CommonModule, ReactiveFormsModule],
  templateUrl: './fundaciones.component.html',
  styleUrl: './fundaciones.component.css'
})
export class FundacionesComponent {
  fundaciones: any[] = [];

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.apiService.getAllFundaciones().subscribe({
      next: (fundaciones) => {
        console.log(fundaciones);
        this.fundaciones = fundaciones;
      },
      error: (err) => {
        console.error('Error al obtener las fundaciones:', err);
      }
    });
  }

}
