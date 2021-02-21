import { Component, OnInit } from '@angular/core';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import { BooksService } from 'src/app/services/books.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  books =[]
  faEye=faEye;
  constructor(private booksService: BooksService) { 
    
  }

  ngOnInit(): void {
    this.booksService.getAll() 
    .subscribe(
      (books: any)=> {
        this.books = books.data
      }, 
      (error)=>{
        console.log('Error obteniendo libros: ', error)
      })
  }

}
