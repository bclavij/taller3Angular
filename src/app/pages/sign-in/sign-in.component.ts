import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ClientsService } from '../../services/clients.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {
  signInForm: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private clientsService: ClientsService
  ) { }

  ngOnInit(): void {
    this.signInForm = this.formBuilder.group({
      correo: ['', Validators.required],
      contrasena: ['', Validators.required]
    });
  }

  onSubmit() {
    console.log('formulario ', this.signInForm);

    if (this.signInForm.valid) {
      this.clientsService.login(this.signInForm.value)
        .subscribe(
          (client) => {
            alert('Usuario logueado exitósamente.');
            console.log('client ', client)
          },
          (error) => {
            alert('Usuario o contraseña no validos.');
            console.error('Error: ', error);
          }
        );
    } else {
      alert('Error: Debes completar todos los campos');
    }

    document.getElementById('sign-up-form').classList.add('was-validated');
  }

}
