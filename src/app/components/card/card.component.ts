import { Component, Input, OnInit } from '@angular/core';
import { Numbers } from 'src/app/common/models/numbers.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  imports: [CommonModule],
})
export class CardComponent implements OnInit {
  //Recuperar valores insertados en el lugar donde se usan los componentes
  @Input() multiples: Numbers | null = null;

  constructor() {}

  ngOnInit() {}

  //Función para aplicar el color según el primer múltiplo
  listClass(multiple: number): string {
    if (multiple === 3) {
      return 'multiple3';
    }
    if (multiple === 5) {
      return 'multiple5';
    }
    if (multiple === 7) {
      return 'multiple7';
    }
    return '';
  }
}
