import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  email: string;
  senha: string;


  constructor(private toastController: ToastController, private route: Router) { }

  ngOnInit() {
  }

  login() {
    if(this.email === "henrijb@gmail.com" && this.senha === '102030') {
      this.presentToast('Bem Vindo', 'success');
      this.route.navigateByUrl('/home');
    } else {
      this.presentToast('Usuário ou senha inválido', 'danger');
    }
  }

  async presentToast(texto: string, cor: string) {
    const toast = await this.toastController.create({
      message: texto,
      color: cor,
      duration: 2000,
      position: 'bottom'
    });
    toast.present();
  }
}
