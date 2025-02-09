import { bootstrapApplication } from '@angular/platform-browser';
import { RouteReuseStrategy, provideRouter, withPreloading, PreloadAllModules } from '@angular/router';
import { IonicRouteStrategy, provideIonicAngular } from '@ionic/angular/standalone';

import { routes } from './app/app.routes';
import { AppComponent } from './app/app.component';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

bootstrapApplication(AppComponent, {
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    provideIonicAngular(),
    provideRouter(routes, withPreloading(PreloadAllModules)), provideFirebaseApp(() => initializeApp({ projectId: "multiplos-3ef14", appId: "1:251223599085:web:1b4ad216ded431b3a069e4", storageBucket: "multiplos-3ef14.firebasestorage.app", apiKey: "AIzaSyBv-PKRSFauXPIf3scOdeR8QMP66X_ctcg", authDomain: "multiplos-3ef14.firebaseapp.com", messagingSenderId: "251223599085", measurementId: "G-6RTCR3GHB0" })), provideFirestore(() => getFirestore()),
  ],
});
