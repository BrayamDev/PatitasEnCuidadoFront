import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IRequestVacunas } from '../Models/VacunasModel/RequestIVacunas.Interface';
import { Observable } from 'rxjs';
import { IRequestFundaciones } from '../Models/FundacionesModel/RequestIFundaciones.Interface';
import { IRequestTipoAnimal } from '../Models/TipoAnimalModel/RequestITipoAnimal.Interface';
import { IResponseAdoptantes } from '../Models/AdoptantesModel/ResponseAdoptantes.Interface';

@Injectable({
  providedIn: 'root',
})

export class ApiService {
  urlEndpoint: string = 'https://localhost:7183';

  constructor(private http: HttpClient) {}

  getAllVacunas():Observable<IRequestVacunas[]>{
    const url = `${this.urlEndpoint}/api/Vacunas`;
    return this.http.get<IRequestVacunas[]>(url);
  }
 
  getAllFundaciones():Observable<IRequestFundaciones[]>{
    const url = `${this.urlEndpoint}/api/Fundacion`;
    return this.http.get<IRequestFundaciones[]>(url);
  }

  getAllTipoAnimal():Observable<IRequestTipoAnimal[]>{
    const url = `${this.urlEndpoint}/api/TipoAnimal`;
    return this.http.get<IRequestTipoAnimal[]>(url);
  }

  getAllAdoptantes():Observable<IResponseAdoptantes[]>{
    const url = `${this.urlEndpoint}/api/Adoptante`;
    return this.http.get<IResponseAdoptantes[]>(url);
  }

  
}
