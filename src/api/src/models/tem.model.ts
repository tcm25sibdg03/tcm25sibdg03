import {Entity, model, property} from '@loopback/repository';

@model()
export class Tem extends Entity {
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
  isbnlivro: number;

  @property({
    type: 'number',
    required: true,
  })
  quantidade: number;


  constructor(data?: Partial<Tem>) {
    super(data);
  }
}

export interface TemRelations {
  // describe navigational properties here
}

export type TemWithRelations = Tem & TemRelations;
