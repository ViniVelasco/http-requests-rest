import { CidadeService } from './cidade.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  cidades = [];

  constructor(private cidadeService: CidadeService) { }

  adicionar(nome: string) {
    this.cidadeService.adicionar({ nome: nome })
      .then( cidade => {
        alert(`Cidade "${cidade.nome}" adicionada com o código ${cidade.id}`);
        this.consultar();
      });
  }

  excluir(id: number) {
    this.cidadeService.excluir(id)
     .then( cidade => {
        this.consultar();
     });
  }

  atualizar(cidade: any) {
    this.cidadeService.atualizar(cidade)
      .then(() => {
        alert('Cidade alterada com sucesso!');
      })
      .catch(erro => {
        alert(erro);
      });
  }

  consultar() {
    this.cidadeService.consultar()
    .then(cidades => {
      this.cidades = cidades;
    });
  }

  ngOnInit(): void {
   this.consultar();
  }

}
