import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonButton,
  IonInput,
  IonSpinner,
  IonToast,
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
    CardComponent,
    IonSpinner,
    IonToast,
  ],
})
export class HomePage {
  fireService = inject(FirebaseService);

  ListNumbers: Numbers[] = [];
  Message: string | null = null;

  form = new FormGroup({
    number: new FormControl(),
  });

  constructor() {}

  ngOnInit() {
    this.fireService.getNumbers().subscribe((data) => {
      const orderNumbers = data.sort((a, b) => a.initialValue - b.initialValue);
      this.ListNumbers = orderNumbers;
    });
  }

  async createNumber() {
    const number = this.form.value.number;
    const ListMultiples: Multiples[] = [];

    if (number !== 0 && number !== null) {
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

      try {
        const res = await this.fireService.createNumber({
          initialValue: number,
          multiples: ListMultiples,
        });

        if (!res) {
          this.openToast('El numero ingresado ya esta registrado');
        } else {
          this.openToast('Se a creado el componente correctamente');
        }
      } catch {
        this.openToast('A ocurrido un error intenta de nuevo');
      }
    } else {
      this.openToast('El numero ingresado no es valido');
    }
  }

  openToast(message: string) {
    this.Message = message;
    setTimeout(() => {
      this.Message = null;
    }, 3000);
  }
}
