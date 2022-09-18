import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { StorageService } from '../services/storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  email: string;
  senha: string;
  allDataLogins: Array<string> = [];


  constructor(
    private toastController: ToastController,
    private route: Router,
    private storageService: StorageService, 
    ) { }

  ngOnInit() {
  }

  login() {    

    console.log(this.storageService.getAllLogins(this.email, this.senha))

    if(this.storageService.getAllLogins(this.email, this.senha)) {
      this.presentToast('Bem Vindo', 'success');
      this.route.navigateByUrl('/home');
    } else {
      this.presentToast('Usuário ou senha inválido', 'danger');
    }
  }

  registrarUsuario() {
    this.route.navigateByUrl('/cadastro-login');
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
