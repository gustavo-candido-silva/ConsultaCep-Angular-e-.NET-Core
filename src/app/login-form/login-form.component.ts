import { HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Usuario } from '../models/usuario';
import { LoginFormService } from './login-form.service';
import { Router } from '@angular/router'
import { AuthService } from '../guards/auth.service'  

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  public loginForm: FormGroup | any;
  public usuario: Usuario = new Usuario();
  public errorMessage = '';

  constructor(private fb: FormBuilder,
              private loginService : LoginFormService,
              private router: Router,
              private auth: AuthService 
              ) { 
                this.criarForm();
              }

  ngOnInit(): void {
    this.auth.logout();  
    
    if(localStorage.getItem('bypass') == 'true' ){
      this.errorMessage = 'Para acessar é necessário entrar com usuário';
      localStorage.setItem('bypass', 'false'); 
    }

  }

criarForm(){
  this.loginForm = this.fb.group({
    txUserName: [''],
    txSenha: ['']
  });
}

logar(){

  this.usuario.txUserName = this.loginForm.value.txUserName;
  this.usuario.txSenha = this.loginForm.value.txSenha;
  this.errorMessage = '';

  if(this.usuario.txUserName == '' && this.usuario.txSenha == ''){
    this.errorMessage = 'O campo Usuário e Senha não podem estar vazios';
  }else if(this.usuario.txUserName == ''){
    this.errorMessage = 'O campo Usuário não pode estar vazio';
  }else if(this.usuario.txSenha == ''){
    this.errorMessage = 'O campo Senha não pode estar vazio';
  }else{

    this.loginService.postLogin(this.usuario).subscribe(
      (usuario: Usuario) => {
        localStorage.setItem('isLoggedIn', 'true');  
        localStorage.setItem('user', usuario.txUserName); 
        this.router.navigate(['cep']);
      },

      (erro: HttpResponse<any>) => {
        if(erro.status == 401){

          this.errorMessage = 'Usuario e/ou Senha inválidos';

        } else{
          console.error(erro);
        }

      }
    );

  }
}

}
