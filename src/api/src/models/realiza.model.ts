import {Entity, model, property} from '@loopback/repository';

@model()
export class Realiza extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: false,
    required: true,
  })
  idloja: number;

  @property({
    type: 'number',
    required: true,
  })
  idcompra: number;


  constructor(data?: Partial<Realiza>) {
    super(data);
  }
}

export interface RealizaRelations {
  // describe navigational properties here
}

export type RealizaWithRelations = Realiza & RealizaRelations;
