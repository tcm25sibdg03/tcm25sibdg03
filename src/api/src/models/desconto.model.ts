import {Entity, model, property, hasMany} from '@loopback/repository';
import {Aplicadoem} from './aplicadoem.model';

@model()
export class Desconto extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: false,
    required: true,
  })
  percentagem: number;

  @property({
    type: 'date',
    required: true,
  })
  datainicio: string;

  @property({
    type: 'date',
    required: true,
  })
  datafim: string;

  @hasMany(() => Aplicadoem, {keyTo: 'percentagem'})
  aplicadoem: Aplicadoem[];

  constructor(data?: Partial<Desconto>) {
    super(data);
  }
}

export interface DescontoRelations {
  // describe navigational properties here
}

export type DescontoWithRelations = Desconto & DescontoRelations;
