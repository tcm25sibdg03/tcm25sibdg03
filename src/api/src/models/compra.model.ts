import {Entity, model, property, hasOne, hasMany} from '@loopback/repository';
import {Endereco} from './endereco.model';
import {Inclui} from './inclui.model';
import {Realiza} from './realiza.model';

@model()
export class Compra extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: false,
    required: true,
  })
  idcompra: number;

  @property({
    type: 'string',
    required: true,
  })
  tipo: string;

  @property({
    type: 'date',
    required: true,
  })
  data: string;

  @property({
    type: 'number',
    required: true,
  })
  valortotal: number;

  @property({
    type: 'number',
    required: true,
  })
  numerocliente: number;

  @property({
    type: 'number',
    required: true,
  })
  codigofuncionario: number;

  @hasOne(() => Endereco, {keyTo: 'idencomenda'})
  endereco: Endereco;

  @hasMany(() => Inclui, {keyTo: 'idcompra'})
  inclui: Inclui[];

  @hasMany(() => Realiza, {keyTo: 'idcompra'})
  realiza: Realiza[];

  constructor(data?: Partial<Compra>) {
    super(data);
  }
}

export interface CompraRelations {
  // describe navigational properties here
}

export type CompraWithRelations = Compra & CompraRelations;
