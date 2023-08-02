import { ActivatedRoute, Router } from '@angular/router';
import { PensamentoService } from '../Services/pensamento.service';
import { Pensamento } from './../pensamento';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-excluir-pensamento',
  templateUrl: './excluir-pensamento.component.html',
  styleUrls: ['./excluir-pensamento.component.css']
})
export class ExcluirPensamentoComponent implements OnInit {

  pensamento: Pensamento = {
    id: 0,
    conteudo: "",
    autoria: "",
    modelo: ""
  }

  constructor(
    private service: PensamentoService,
    private router: Router,
    private route: ActivatedRoute // classe que fornece informaçoes sobre os paramentros e caminhos que virão dos cards de pensamento
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')// snapshot faz uma especie de fotografia da rota no momento em que é acessada // paraMap nos tras um mapa com todas as infomações os paramentors obrigatorios e opicionais do pensamento
    this.service.buscarPensamntoPorId(parseInt(id!)).subscribe((pensamento) => {
      this.pensamento = pensamento
    })
  }

  excluirPensamento() {
    if (this.pensamento.id) {
      this.service.excluir(this.pensamento.id).subscribe(() => {
        this.router.navigate(['/listar-pensamentos'])

      })
    }
  }

  cancelar() {
    this.router.navigate(['/listar-pensamentos'])
  }
}
