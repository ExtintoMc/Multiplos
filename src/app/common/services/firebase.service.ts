import { inject, Injectable } from '@angular/core';
import { collectionData, Firestore } from '@angular/fire/firestore';
import { addDoc, collection, getDocs, query, where } from '@firebase/firestore';
import { Observable } from 'rxjs';
import { Numbers } from '../models/numbers.model';

@Injectable({
  providedIn: 'root',
})
export class FirebaseService {
  firestore: Firestore = inject(Firestore);

  constructor() {}

  getNumbers(): Observable<Numbers[]> {
    const collectionRef = collection(this.firestore, '/numbers');
    return collectionData(collectionRef, { idField: 'id' }) as Observable<
      Numbers[]
    >;
  }

  async createNumber(data: Numbers) {
    const collectionRef = collection(this.firestore, '/numbers');
    const q = query(
      collectionRef,
      where('initialValue', '==', data.initialValue)
    );

    try {
      const number = await getDocs(q);

      if (!number.empty) {
        return false;
      }

      await addDoc(collectionRef, data);
      return true;
    } catch {
      return false;
    }
  }
}
