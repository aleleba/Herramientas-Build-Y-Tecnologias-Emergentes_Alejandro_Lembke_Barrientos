import { Component, OnInit, Input } from '@angular/core';
import { FilterPipe } from 'ngx-filter-pipe';

@Component({
  selector: 'buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['../../../../../api-app/assets/css/catalogo/buscador/buscador.component.css']
})
export class BuscadorComponent implements OnInit {
  
  @Input() productos;
  @Input() productoFilter;
  
  constructor(private filterPipe: FilterPipe) { }

  ngOnInit() {
  }

}
