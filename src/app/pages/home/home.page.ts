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
} from '@ionic/angular/standalone';
import { Multiples, Numbers } from 'src/app/common/models/numbers.model';
import { FirebaseService } from 'src/app/common/services/firebase.service';
import { CardComponent } from 'src/app/components/card/card.component';

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
    IonInput,
    ReactiveFormsModule,
    CommonModule,
    CardComponent,
  ],
})
export class HomePage {
  fireService = inject(FirebaseService);

  ListNumbers: Numbers[] = [];

  form = new FormGroup({
    number: new FormControl(),
  });

  constructor() {}

  ngOnInit() {
    this.fireService.getNumbers().subscribe((data) => {
      this.ListNumbers = data;
      console.log(data);
    });
  }

  list() {
    const number = this.form.value.number;
    const ListMultiples: Multiples[] = [];

    if (number !== 0 || number !== null) {
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
        ListMultiples.push({ number: i, multiple: multiples });
      }

      this.fireService.createNumber({
        initialValue: number,
        multiples: ListMultiples,
      });
    }
  }

  listClass(multiple: number ): string {
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
