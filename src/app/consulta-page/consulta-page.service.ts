import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ConsultaPageService {

  baseUrl = environment.cepApiBaseUrl;

  constructor(private http: HttpClient) { }

  getEndereco(txCep: string){

    return this.http.get(this.baseUrl+'/consultar/${id}');

  }

}
