/* eslint-disable no-underscore-dangle */
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  private _storage: Storage | null = null;

  constructor(private storage: Storage) {
    this.init();
  }

  async init() {
    const storage = await this.storage.create();
    this._storage = storage;
  }

  public set(key: string, value: any) {
    this._storage?.set(key, value);
  }

  public get(key: string) {
    this._storage?.get(key);
  }

  public remove(key: string) {
    this._storage?.remove(key);
  }

  public getAll() {
    const lista = [];

    this._storage.forEach((value, key, index) => {
      lista.push(value);
    });
    return lista;
  }

  public countRegister() {
    return this._storage?.length();
  }

  public async cleanRegister() {
    await this._storage?.clear();
  }
}
