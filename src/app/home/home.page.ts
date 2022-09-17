import { Component } from '@angular/core';
import { Usuario } from '../models/Usuario';
import { StorageService } from '../services/storage.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  listaUsuarios: Usuario[] = [];

  constructor(private storage: StorageService) {}

  async buscarUsuarios() {
    this.listaUsuarios = await this.storage.getAll();
  }

  ionViewDidEnter() {
    this.buscarUsuarios();
  }

  async excluirCadastro(email: string){
    await this.storage.remove(email);
    this.buscarUsuarios();
  }
}
