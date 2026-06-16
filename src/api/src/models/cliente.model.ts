import {Entity, model, property, hasMany} from '@loopback/repository';
import {Compra} from './compra.model';

@model()
export class Cliente extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: false,
    required: true,
  })
  numero: number;

  @property({
    type: 'string',
    required: true,
  })
  nome: string;

  @property({
    type: 'number',
    required: true,
  })
  contacto: number;

  @hasMany(() => Compra, {keyTo: 'numerocliente'})
  compras: Compra[];

  constructor(data?: Partial<Cliente>) {
    super(data);
  }
}

export interface ClienteRelations {
  // describe navigational properties here
}

export type ClienteWithRelations = Cliente & ClienteRelations;
