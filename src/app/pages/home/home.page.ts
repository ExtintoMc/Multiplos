import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
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

interface listNumber {
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
  listNumber: listNumber[] = [];

  form = new FormGroup({
    number: new FormControl(),
  });

  constructor() {}

  list() {
    const number = this.form.value.number;
    this.listNumber = [];

    if (number !== 0) {
      for (let i = 0; i <= number; i++) {
        const multiples: number[] = [];

        if (i % 3 === 0) {
          multiples.push(3);
        }
        if (i % 5 === 0) {
          multiples.push(5);
        }
        if (i % 7 === 0) {
          multiples.push(7);
        }

        this.listNumber.push({ number: i, multiple: multiples });
      }
    }
    console.log(this.listNumber);
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
