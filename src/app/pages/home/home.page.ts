import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonButton,
  IonInput,
  IonItem,
} from '@ionic/angular/standalone';
import { FirebaseService } from 'src/app/common/services/firebase/firebase.service';

interface numbers {
  number: number;
  multiples: ListMultiples;
}

interface ListMultiples {
  number: number;
  multiple?: number[];
}

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonButton,
    IonItem,
    IonInput,
    ReactiveFormsModule,
    CommonModule,
  ],
})
export class HomePage {
  fireService = inject(FirebaseService);

  ListMultiples: ListMultiples[] = [];

  form = new FormGroup({
    number: new FormControl(),
  });

  constructor() {}

  list() {
    const number = this.form.value.number;
    this.ListMultiples = [];

    if (number !== 0) {
      for (let i = 0; i <= number; i++) {
        const ListMultiples: number[] = [];

        if (i % 3 === 0) {
          ListMultiples.push(3);
        }
        if (i % 5 === 0) {
          ListMultiples.push(5);
        }
        if (i % 7 === 0) {
          ListMultiples.push(7);
        }

        this.ListMultiples.push({ number: i, multiple: ListMultiples });
      }

      this.fireService.createNumber({
        number: number,
        multiples: this.ListMultiples,
      });
    }
    console.log(this.ListMultiples);
  }

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
