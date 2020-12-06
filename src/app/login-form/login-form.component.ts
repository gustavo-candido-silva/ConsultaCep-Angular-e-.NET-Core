import { HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Usuario } from '../models/usuario';
import { LoginFormService } from './login-form.service';
import { Route, Router } from '@angular/router'

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
              private router: Router) { 
                this.criarForm();
              }

  ngOnInit(): void {
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
    this.errorMessage = 'O campo Usuário e Senha não podem estar vazio';
  }else if(this.usuario.txUserName == ''){
    this.errorMessage = 'O campo Usuário não pode estar vazio';
  }else if(this.usuario.txSenha == ''){
    this.errorMessage = 'O campo Senha não pode estar vazio';
  }else{

    this.loginService.postLogin(this.usuario).subscribe(
      (usuario: Usuario) => {
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
