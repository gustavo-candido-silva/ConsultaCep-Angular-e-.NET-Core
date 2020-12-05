import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginFormService {

  private baseUrl = ""

  constructor(private http: HttpClient) { }

  postLogin(txUserName: string, txSenha:string){

  }
  
}
