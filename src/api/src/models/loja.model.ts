import {Entity, model, property, hasMany} from '@loopback/repository';
import {Tem} from './tem.model';
import {Aplicadoem} from './aplicadoem.model';
import {Realiza} from './realiza.model';

@model()
export class Loja extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: false,
    required: true,
  })
  idloja: number;

  @property({
    type: 'string',
    required: true,
  })
  cidade: string;

  @property({
    type: 'string',
    required: true,
  })
  rua: string;

  @hasMany(() => Tem, {keyTo: 'idloja'})
  tem: Tem[];

  @hasMany(() => Aplicadoem, {keyTo: 'idloja'})
  aplicadoem: Aplicadoem[];

  @hasMany(() => Realiza, {keyTo: 'idloja'})
  realiza: Realiza[];

  constructor(data?: Partial<Loja>) {
    super(data);
  }
}

export interface LojaRelations {
  // describe navigational properties here
}

export type LojaWithRelations = Loja & LojaRelations;
