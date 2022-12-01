import { Component } from '@angular/core';

@Component({
  selector: 'app-grafica1',
  templateUrl: './grafica1.component.html',
  styles: [
  ]
})
export class Grafica1Component {

  labels1: string[] =  [ 'pan', 'medialuna', 'cafe' ];
  data ={
    labels: this.labels1,
    datasets: [
      { 
        data: [ 10, 25, 100 ],
        backgroundColor: ['#6857E6', '#009FEE', '#F02059']
      }
    ]
  };

}
