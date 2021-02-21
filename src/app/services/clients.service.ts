import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ClientsService {

  constructor(private http: HttpClient) { }

  registro(client: Object) {
    return this.http.post('http://localhost:3000/clients', client)
  }

}
