import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { Multiples, Numbers } from 'src/app/common/models/numbers.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  imports: [CommonModule],
})
export class CardComponent implements OnInit {
  @Input() multiples: Numbers | null = null;

  constructor() {}

  ngOnInit() {}

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
