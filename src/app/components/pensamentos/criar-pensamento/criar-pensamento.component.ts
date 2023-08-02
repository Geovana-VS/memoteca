
import { Component, OnInit } from '@angular/core';
import { Pensamento } from '../pensamento';
import { PensamentoService } from '../Services/pensamento.service';

@Component({
  selector: 'app-criar-pensamento',
  templateUrl: './criar-pensamento.component.html',
  styleUrls: ['./criar-pensamento.component.css']
})
export class CriarPensamentoComponent implements OnInit{
  pensamento: Pensamento = {

    conteudo: "",
    autoria: "",
    modelo : ""
  }

  constructor(private service :PensamentoService){

  }

  ngOnInit(): void {

  }

  public criarPensamento(){
    this.service.criar(this.pensamento).subscribe()
  }

  public pensamentoCancelado(){
   // alert("ação cancelada")
  }


}
