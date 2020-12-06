import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginFormService {

  private baseUrl = environment.loginApiBaseUrl;

  constructor(private http: HttpClient) { }

  postLogin(txUserName: string, txSenha:string){

    var body = JSON.parse('{"txUserName":"'+txUserName+'","txSenha":"'+txSenha+'"}')
    return this.http.post(this.baseUrl+'/logar', body)
    
  }
  
}
