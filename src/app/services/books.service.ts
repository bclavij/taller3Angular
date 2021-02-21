import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  constructor(private http:HttpClient ) { }

  getAll() {
    return this.http.get('http://localhost:3000/libros/')
  }

  getOne(id: String) {
    return this.http.get('http://localhost:3000/libros/'+id)
  }

}