import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  email!: string;
  senha!: string;

  handleSubmit() {
    const formData: FormInput = {
      email: this.email,
      senha: this.senha
    };
    //formdata
    this.email = '';
    this.senha = '';
  }
}

interface FormInput {
  email: string;
  senha: string;
}
