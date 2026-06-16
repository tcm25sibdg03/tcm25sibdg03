import {Entity, model, property, hasMany} from '@loopback/repository';
import {Compra} from './compra.model';

@model()
export class Funcionario extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: false,
    required: true,
  })
  codigo: number;

  @property({
    type: 'string',
    required: true,
  })
  nome: string;

  @property({
    type: 'string',
    required: true,
  })
  funcao: string;

  @hasMany(() => Compra, {keyTo: 'codigofuncionario'})
  compras: Compra[];

  constructor(data?: Partial<Funcionario>) {
    super(data);
  }
}

export interface FuncionarioRelations {
  // describe navigational properties here
}

export type FuncionarioWithRelations = Funcionario & FuncionarioRelations;
