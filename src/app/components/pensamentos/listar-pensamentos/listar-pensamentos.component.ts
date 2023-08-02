import { Component, OnInit } from '@angular/core';
import { Pensamento } from '../pensamento';
import { PensamentoService } from '../Services/pensamento.service';

@Component({
  selector: 'app-listar-pensamentos',
  templateUrl: './listar-pensamentos.component.html',
  styleUrls: ['./listar-pensamentos.component.css']
})
export class ListarPensamentosComponent implements OnInit{
   listaPensamento : Pensamento[] = [];

   constructor(private service:PensamentoService){

   }

  ngOnInit(): void {
    this.carregarLista();

  }

  private carregarLista(): void {
    this.service.listar().subscribe((listaPensamento)=>{
      this.listaPensamento = listaPensamento
    });
  }

}
