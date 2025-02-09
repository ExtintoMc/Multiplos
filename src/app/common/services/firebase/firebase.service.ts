import { inject, Injectable } from '@angular/core';
import { collectionData, Firestore } from '@angular/fire/firestore';
import { collection, doc, setDoc } from '@firebase/firestore';

@Injectable({
  providedIn: 'root',
})
export class FirebaseService {
  firestore: Firestore = inject(Firestore);

  constructor() {}

  getMultiples() {
    const multiples = collection(this.firestore, '/numbers');
    return collectionData(multiples);
  }

  createNumber(data: any) {
    console.log(data);
    const document = doc(this.firestore, 'numbers', 'JDUvW0z6Wzj9FtPLdFG9');
    return setDoc(document, data);
  }
}
