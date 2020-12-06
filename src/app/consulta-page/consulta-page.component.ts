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
    this.consultarCep(this.consultaForm?.value.txCep); 
  }

  consultarCep(txCep: string){

    this.txendereco = '';

    this.consultaService.getEndereco(txCep).subscribe(
      (endereco: Endereco) => {
        this.txendereco = `O endereço é ${endereco.logradouro}, ${endereco.complemento}, ${endereco.bairro}, ${endereco.localidade} - ${endereco.uf}`;
      },
      (erro: any) => {
        console.error(erro);
      }
    );
  }



}
