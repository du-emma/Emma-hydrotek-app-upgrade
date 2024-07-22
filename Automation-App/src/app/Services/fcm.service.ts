import { Injectable } from '@angular/core';
import {
  //PushNotificationSchema,
  Token,
  ActionPerformed
} from '@capacitor/push-notifications'; 
import { PushNotification} from '@capacitor/push-notifications';
import { Capacitor, Plugins } from '@capacitor/core';
import { Router } from '@angular/router';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AuthService } from '../auth/auth.service';
import { take } from 'rxjs/operators';
import { Plugin } from '@ionic-native/core';
 
const { PushNotificationSchema } = Plugins;
 
@Injectable({
  providedIn: 'root'
})
export class FcmService {
 
  constructor(private router: Router, private fireStore: AngularFirestore, private authService: AuthService) { }
 
  initPush() {
    console.log("inside init push");
    if (Capacitor.getPlatform() !== 'web') {
      console.log("not web");
      this.registerPush();
    }
  }
 
  private registerPush() {
    PushNotificationSchema.requestPermission().then((permission) => {
      if (permission.granted) {
        // Register with Apple / Google to receive push via APNS/FCM
        PushNotificationSchema.register();
      } else {
        // No permission for push granted
      }
    });
 
    PushNotificationSchema.addListener(
      'registration',
      (token: Token) => {
        this.authService.userId.pipe(take(1)).subscribe((userID) => {
          this.fireStore.collection('userData').doc(userID).update({registrationToken: token.value});
        });
      }
    );
 
    PushNotificationSchema.addListener('registrationError', (error: any) => {
      console.log('Error: ' + JSON.stringify(error));
    });
 
    PushNotificationSchema.addListener(
      'pushNotificationReceived',
      async (notification: typeof PushNotificationSchema) => {
        console.log('dPush received: ' + JSON.stringify(notification));
      }
    );

    console.log("added listener");
 
    PushNotificationSchema.addListener(
      'pushNotificationActionPerformed',
      async (notification: ActionPerformed) => {
        const data = notification.notification.data;
        console.log('Action performed: ' + JSON.stringify(notification.notification));
        if (data.detailsId) {
          this.router.navigateByUrl('/analytics');
        }
      }
    );
  }
}