import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Usuario } from '../models/usuario';

@Injectable({
  providedIn: 'root'
})
export class LoginFormService {

  private baseUrl = environment.loginApiBaseUrl;

  constructor(private http: HttpClient) { }

  postLogin(usuario : Usuario) : Observable<Usuario>{

    return this.http.post<Usuario>(`${this.baseUrl}/logar`, usuario)
    
  }
  
}
