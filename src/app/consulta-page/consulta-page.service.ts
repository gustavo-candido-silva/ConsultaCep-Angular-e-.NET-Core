import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Endereco } from '../models/endereco';

@Injectable({
  providedIn: 'root'
})
export class ConsultaPageService {

  baseUrl = environment.cepApiBaseUrl;

  constructor(private http: HttpClient) { }



  
  getEndereco(txCep: string) : Observable<Endereco>{

    return this.http.get<Endereco>(`${this.baseUrl}/consultar/?txCep=${txCep}`);

  }

}
