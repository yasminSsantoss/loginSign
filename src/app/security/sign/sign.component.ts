import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-sign',
  templateUrl: './sign.component.html',
  styleUrls: ['./sign.component.scss']
})
export class SignComponent {

  cep!: string;
  bairro!: string;
  cidade!: string;
  estado!: string;

  constructor(private http: HttpClient) {}

  buscarEnderecoPorCep() {
    const cep = this.cep.replace(/\D/g, '');

    if (cep !== '') {
      const validacep = /^[0-9]{8}$/;

      if (validacep.test(cep)) {
        const url = `https://viacep.com.br/ws/${cep}/json/`;
        this.http.get(url).subscribe(
          (data: any) => {
            if (!data.erro) {
              this.bairro = data.bairro;
              this.cidade = data.localidade;
              this.estado = data.uf;
            } else {
              this.limparCampos();
              alert('CEP não encontrado.');
            }
          },
          (error) => {
            console.log(error);
            this.limparCampos();
            alert('Erro ao buscar o endereço.');
          }
        );
      } else {
        this.limparCampos();
        alert('Formato de CEP inválido.');
      }
    } else {
      this.limparCampos();
    }
  }

  limparCampos() {
    this.bairro = '';
    this.cidade = '';
    this.estado = '';
  }
}
