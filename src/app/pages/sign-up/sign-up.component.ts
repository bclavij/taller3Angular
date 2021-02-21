import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ClientsService } from '../../services/clients.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  signUpForm: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private clientsService: ClientsService
  ) { }

  ngOnInit(): void {
    this.signUpForm = this.formBuilder.group({
      nombre: ['', Validators.required],
      direccion: ['', Validators.required],
      celular: ['', Validators.required],
      correo: ['', Validators.required, Validators.email],
      contrasena: ['', Validators.required]
    });
  }

  onSubmit() {
    console.log('formulario ', this.signUpForm);

    //if (this.signUpForm.valid) {
      this.clientsService.registro(this.signUpForm.value)
        .subscribe(
          (client) => {
            alert('Usuario registrado exitósamente.');
            console.log('client ', client)
          },
          (error) => {
            alert('Error: No se pudo completar el registro.');
            console.error('Error creating client: ', error);
          }
        );
    /*} else {
      alert('Error: Debes completar todos los campos');
    }*/

    document.getElementById('sign-up-form').classList.add('was-validated');
  }
}
