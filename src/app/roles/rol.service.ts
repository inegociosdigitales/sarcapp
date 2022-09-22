import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpRequest, HttpEvent } from '@angular/common/http';
import { Rol } from './rol';

@Injectable()
export class RolService{

    private urlEndPoint: string = 'http://localhost:8080/api/roles';

    private httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });

    constructor(private http: HttpClient) { }

    create(rol:Rol): Observable<Rol>{
        return this.http.post<Rol>(this.urlEndPoint,rol,{headers:this.httpHeaders});
    }

    

    


}