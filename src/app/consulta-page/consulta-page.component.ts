import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Endereco } from "../models/endereco";
import { ConsultaPageService } from './consulta-page.service';
import { AuthService } from '../guards/auth.service'; 
import { Router } from "@angular/router";

@Component({
  selector: 'app-consulta-page',
  templateUrl: './consulta-page.component.html',
  styleUrls: ['./consulta-page.component.css']
})
export class ConsultaPageComponent implements OnInit {

  public consultaForm: FormGroup | any;
  public txendereco = '';
  public errorMessage = '';
  public user = localStorage.getItem('user');

  constructor(private fb: FormBuilder, 
              private consultaService : ConsultaPageService,
              private router: Router,
              ) { 
                this.criarForm();
              }

  ngOnInit(): void {

    if(localStorage.getItem('isLoggedIn') == 'false'){
      localStorage.setItem('bypass', 'true'); 
      this.router.navigate(['']);
    }

  }

  criarForm(){
    this.consultaForm = this.fb.group({
      txCep:['']
    });
  }

  consultaSubmit(){

    var cep = this.consultaForm?.value.txCep;

        cep = cep.replace('-','');

    this.consultarCep(cep); 

  }

  consultarCep(txCep: string){

    this.txendereco = '';
    this.errorMessage = '';

    if(txCep.length == 8){
      this.consultaService.getEndereco(txCep).subscribe(
        (endereco: Endereco) => {
          this.txendereco = `O endereço é ${endereco.logradouro}, ${endereco.complemento}, ${endereco.bairro}, ${endereco.localidade} - ${endereco.uf}`;
        },
        (erro: any) => {
          console.error(erro);
        }
      );
    }else{
      this.errorMessage = 'CEP inválido!';
    }
  }

 logout(){
   this.router.navigate(['']);
 }

}
