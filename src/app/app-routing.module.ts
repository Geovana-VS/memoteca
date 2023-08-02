import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CriarPensamentoComponent } from './components/pensamentos/criar-pensamento/criar-pensamento.component';
import { ListarPensamentosComponent } from './components/pensamentos/listar-pensamentos/listar-pensamentos.component';
import { ExcluirPensamentoComponent } from './components/pensamentos/excluir-pensamento/excluir-pensamento.component';
import { EditarPensamentoComponent } from './components/pensamentos/editar-pensamento/editar-pensamento.component';

const routes: Routes = [

  {path: "", redirectTo:"listar-pensamentos", pathMatch:'full'},
  {path: "criar-pensamento", component: CriarPensamentoComponent},
  {path: "listar-pensamentos", component: ListarPensamentosComponent},
  {path: "pensamento/excluirPensamento/:id", component: ExcluirPensamentoComponent},
  {path: "pensamento/editarPensamento/:id", component: EditarPensamentoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
