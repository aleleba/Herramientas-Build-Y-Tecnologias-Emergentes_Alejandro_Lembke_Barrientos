import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'modal',
  templateUrl: './modal.component.html',
  styleUrls: ['../../../../../api-app/assets/css/catalogo/modal/modal.component.css']
})
export class ModalComponent implements OnInit {
	
  @Input('productos') productos;

  constructor() { }

  ngOnInit() {
  }

}
