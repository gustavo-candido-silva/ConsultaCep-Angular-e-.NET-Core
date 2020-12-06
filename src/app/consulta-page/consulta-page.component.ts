import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Endereco } from "../models/endereco";
import { ConsultaPageService } from './consulta-page.service';

@Component({
  selector: 'app-consulta-page',
  templateUrl: './consulta-page.component.html',
  styleUrls: ['./consulta-page.component.css']
})
export class ConsultaPageComponent implements OnInit {

  public consultaForm: FormGroup | any;
  public txendereco = '';
  public errorMessage = '';

  constructor(private fb: FormBuilder, 
              private consultaService : ConsultaPageService) { 
                this.criarForm();
              }

  ngOnInit(): void {
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



}
