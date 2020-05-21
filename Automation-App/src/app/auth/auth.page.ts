import { Component, OnInit } from '@angular/core';
import {AuthService} from './auth.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import {LoadingController} from '@ionic/angular';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.page.html',
  styleUrls: ['./auth.page.scss'],
})
export class AuthPage implements OnInit {
isLoading = false;
  constructor( private authService: AuthService, private router : Router, private loadingCtrl: LoadingController) {}

  ngOnInit() {
  }
  onLogin(){
    this.isLoading = true;
    this.loadingCtrl.create({keyboardClose:true, message:'Logging in...'})
    .then(loadingEl=>{
      loadingEl.present();
      
      setTimeout(()=>{
        this.isLoading = false;
        loadingEl.dismiss();
        this.router.navigateByUrl('/mail');
      }, 1000)
      this.authService.login();
    })
   
  }
  onSubmit(form: NgForm){
    
  }
}
