import { Component, OnInit, Input } from '@angular/core';
import { faEye } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-book-card',
  templateUrl: './book-card.component.html',
  styleUrls: ['./book-card.component.scss']
})
export class BookCardComponent implements OnInit {
  faEye=faEye;
  @Input() book:{
    _id: '',
    caratula: '',
    nombre: '',
    descripcion: '',
    valorUnitario: 0
  };

  constructor() { }

  ngOnInit(): void {
  }

}
