import { Component, OnInit } from '@angular/core';
import { Rol } from './rol';

@Component({
  selector: 'app-roles',
  templateUrl: './roles.component.html',
  styleUrls: ['./roles.component.css']
})
export class RolesComponent implements OnInit {

  roles: Rol[] = [
    {id:1, nombre: 'Administrador'}
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
