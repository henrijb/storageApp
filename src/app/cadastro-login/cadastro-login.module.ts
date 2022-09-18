import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CadastroLoginPageRoutingModule } from './cadastro-login-routing.module';

import { CadastroLoginPage } from './cadastro-login.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule, ReactiveFormsModule,
    IonicModule,
    CadastroLoginPageRoutingModule
  ],
  declarations: [CadastroLoginPage]
})
export class CadastroLoginPageModule {}
