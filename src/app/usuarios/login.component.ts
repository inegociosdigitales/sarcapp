import { Component, OnInit } from '@angular/core';
import { Usuario } from './usuario';
import swal from 'sweetalert2';
import {AuthService} from './auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {

  titulo:string ='Bienvenido'
  usuario:Usuario;

  constructor(private authService: AuthService) {

    this.usuario = new Usuario();
   }

  ngOnInit(): void {
  }

  login():void{
    console.log(this.usuario);
    if (this.usuario.username == null || this.usuario.password == null) {
      swal.fire('Error Login', 'Username o password vacías!', 'error');
      return;
    }

    this.authService.login(this.usuario).subscribe(response => {
      console.log(response);


      swal.fire('Login', 'has iniciado sesión con éxito!', 'success');
    }, err => {
      console.log(err);
      if (err.status == 400) {
        swal.fire('Error Login', 'Usuario o clave incorrectas!', 'error');
      }else if(err.status==0){
        swal.fire('Error Login', 'Validar servicio activo', 'error');
      }
    }
    );

  }

}
