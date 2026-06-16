import {Entity, model, property} from '@loopback/repository';

@model()
export class Aplicadoem extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: false,
    required: true,
  })
  percentagem: number;

  @property({
    type: 'number',
    required: true,
  })
  idloja: number;


  constructor(data?: Partial<Aplicadoem>) {
    super(data);
  }
}

export interface AplicadoemRelations {
  // describe navigational properties here
}

export type AplicadoemWithRelations = Aplicadoem & AplicadoemRelations;
