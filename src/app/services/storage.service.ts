import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';


// Este código lo saqué de aquí:
// https://github.com/ionic-team/ionic-storage
// Si bien tiene uun apartado por componente, no nos sirve para este caso
// Ya que necesitamos que el servicio esté disponible en toda la aplicación

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  private _storage: Storage | null = null;

  constructor(private storage: Storage) {
    this.init();
  }

  // Inicializa el almacenamiento
  async init() {
    const storage = await this.storage.create();
    this._storage = storage;
  }

  // Guardar un valor
  public set(key: string, value: any) {
    this._storage?.set(key, value);
  }

  // Obtener un valor
  public async get(key: string) {
    return await this._storage?.get(key);
  }

  // Eliminar un valor
  public remove(key: string) {
    this._storage?.remove(key);
  }
}
