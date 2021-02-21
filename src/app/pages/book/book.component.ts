import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router'
import { BooksService } from 'src/app/services/books.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent implements OnInit {
  book = {
    _id: '',
    caratula: '',
    nombre: '',
    descripcion: '',
    valorUnitario: 0
  }
  constructor(private booksService: BooksService, private rutaActiva: ActivatedRoute) { }

  ngOnInit(): void {
    this.booksService.getOne(this.rutaActiva.snapshot.params.id)
    .subscribe(
      (book: any)=>{
        this.book=book.data        
      },
      (error)=>{
        console.log('Error obteniendo libro: ', error)
      }
    )
  }

}
