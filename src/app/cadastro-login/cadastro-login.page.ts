import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms'
import { comparaValidator } from '../validators/compara-validator';
import { CpfValidator } from '../validators/cpf-validator';
import { Usuario } from '../models/Usuario';
import { StorageService } from '../services/storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro-login',
  templateUrl: './cadastro-login.page.html',
  styleUrls: ['./cadastro-login.page.scss'],
})

export class CadastroLoginPage implements OnInit {
  formCadastroLogin: FormGroup;
  usuarioLogin: Usuario = new Usuario();
  mensagens = {
    nome: [
      { tipo: 'required', mensagem: 'O campo Nome é obrigatório.' },
      { tipo: 'minlength', mensagem: 'O nome deve ter pelo menos 3 caracteres.' },
    ],
    cpf: [
      { tipo: 'required', mensagem: 'O campo CPF é obrigatório.' },
      { tipo: 'invalido', mensagem: 'CPF Inválido.' },
    ],
    email: [
      { tipo: 'required', mensagem: 'O campo E-mail é obrigatório.' },
      { tipo: 'email', mensagem: 'E-mail Inválido.' },
    ],
    senha: [
      { tipo: 'required', mensagem: 'É obrigatório confirmar senha.' },
      { tipo: 'minlength', mensagem: 'A senha deve ter pelo menos 6 caracteres.', },
      { tipo: 'maxlength', mensagem: 'A senha deve ter no máximo 8 caractéres.' },
    ],
    confirmarSenha: [
      { tipo: 'required', mensagem: 'É obrigatório confirmar senha.' },
      { tipo: 'minlength', mensagem: 'A senha deve ter pelo menos 6 caracteres.', },
      { tipo: 'maxlength', mensagem: 'A senha deve ter no máximo 8 caractéres.' },
      { tipo: 'comparacao', mensagem: 'Deve ser igual a senha.' },
    ],
  };

  constructor(
    private formBuilder: FormBuilder, 
    private storageService: StorageService, 
    private route: Router) {

    this.formCadastroLogin = this.formBuilder.group({
      nome: ['', Validators.compose([Validators.required, Validators.minLength(3)])],
      cpf: ['', Validators.compose([Validators.required, CpfValidator.cpfValido])],
      email: ['', Validators.compose([Validators.required, Validators.email])],
      senha: ['', Validators.compose([Validators.required, Validators.minLength(6), Validators.maxLength(8)])],
      confirmarSenha: ['', Validators.compose([Validators.required, Validators.minLength(6), Validators.maxLength(8)])],
    },
    {
      Validators: comparaValidator('senha','confirmarSenha')
    });
   }

  ngOnInit() {
  }
  
  async salvarCadastro() {
    //console.log('Formulario', this.formCadastroLogin.valid);

    if(this.formCadastroLogin.valid) {
      this.usuarioLogin.nome = this.formCadastroLogin.value.nome;
      this.usuarioLogin.cpf = this.formCadastroLogin.value.cpf;
      this.usuarioLogin.email = this.formCadastroLogin.value.email;
      this.usuarioLogin.senha = this.formCadastroLogin.value.senha;
      this.usuarioLogin.tipo = 'login';
  
      await this.storageService.set( 
        ((await this.storageService.countRegister()) + 1).toString(),
        this.usuarioLogin);

      this.route.navigateByUrl('/home');

    } else{
      alert('Formulário inválido');
    }
  }
}
