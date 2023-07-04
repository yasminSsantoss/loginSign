import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  handleSubmit(event: Event) {
    event.preventDefault();

    const emailInput = document.getElementById('email') as HTMLInputElement;
    const senhaInput = document.getElementById('senha') as HTMLInputElement;

    const formData: FormInput = {
      email: emailInput.value,
      senha: senhaInput.value,
    };

    //formdata 

    (document.getElementById('loginForm') as HTMLFormElement).reset();
  }
}

interface FormInput {
  email: string;
  senha: string;
}
