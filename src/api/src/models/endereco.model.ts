import {Entity, model, property} from '@loopback/repository';

@model()
export class Endereco extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: false,
    required: true,
  })
  idencomenda: number;

  @property({
    type: 'number',
    required: true,
  })
  codigopostal: number;

  @property({
    type: 'string',
    required: true,
  })
  localidade: string;

  @property({
    type: 'string',
    required: true,
  })
  rua: string;

  @property({
    type: 'number',
    required: true,
  })
  numero: number;

  @property({
    type: 'number',
    required: true,
  })
  idcompra: number;


  constructor(data?: Partial<Endereco>) {
    super(data);
  }
}

export interface EnderecoRelations {
  // describe navigational properties here
}

export type EnderecoWithRelations = Endereco & EnderecoRelations;
