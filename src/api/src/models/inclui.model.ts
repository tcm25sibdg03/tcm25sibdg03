import {Entity, model, property} from '@loopback/repository';

@model()
export class Inclui extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: false,
    required: true,
  })
  idcompra: number;

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

  @property({
    type: 'number',
    required: true,
  })
  preco: number;

  @property({
    type: 'number',
    required: true,
  })
  percentagem: number;

  @property({
    type: 'number',
    required: true,
  })
  valortotal: number;


  constructor(data?: Partial<Inclui>) {
    super(data);
  }
}

export interface IncluiRelations {
  // describe navigational properties here
}

export type IncluiWithRelations = Inclui & IncluiRelations;
