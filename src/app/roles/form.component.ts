import { Component, OnInit } from '@angular/core';
import { Rol } from './rol';
import { RolService } from './rol.service';
import swal from 'sweetalert2';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  titulo:string ='Registrar Perfil';

  public rol: Rol = new Rol();

  errores: string[];

  constructor(private rolService: RolService,
    private router: Router,
    private activatedRoute: ActivatedRoute) {  }

  ngOnInit(): void {
  }


  public create(): void{
    console.log(this.rol);

    this.rolService.create(this.rol)
      .subscribe(
        rol => {
          console.log(rol);
          this.router.navigate(['/roles']);
          swal.fire('Nuevo perfil', `El perfil ${this.rol.nombre} ha sido creado con éxito`, 'success');
        },
        err => {
          this.errores = err.error.errors as string[];
          console.error('Código del error desde el backend: ' + err.status);
          console.error(err.error.errors);
        }
      );
  }

}
