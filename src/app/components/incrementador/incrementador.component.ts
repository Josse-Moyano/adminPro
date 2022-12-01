import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styles: [
  ]
})
export class IncrementadorComponent implements OnInit {

  @Input() progreso: number = 40;
  @Input() btnClass: string = 'btn-primary';

  @Output('valor') valorSalida: EventEmitter<number> = new EventEmitter();

  ngOnInit(): void {
    this.btnClass = `btn ${this.btnClass}`    
  }

  cambiarValor(valor: number): number {
    if (this.progreso >= 100 && valor >= 0) {
      this.valorSalida.emit(100)
      return this.progreso = 100; 
    }
    if (this.progreso <= 0 && valor < 0) {
      this.valorSalida.emit(0)
      return this.progreso = 0; 
    }
    this.valorSalida.emit(this.progreso + valor)
    return this.progreso = this.progreso + valor;
  }

  onChange(nuevoValor: number) {
    if (nuevoValor >= 100) {
      nuevoValor = 100; 
    } else if (nuevoValor <= 0) {
      nuevoValor = 0; 
    } else {
      nuevoValor = nuevoValor; 
    }
    this.valorSalida.emit(nuevoValor);
  }

}
