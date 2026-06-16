import {Entity, model, property, hasMany} from '@loopback/repository';
import {Tem} from './tem.model';
import {Inclui} from './inclui.model';

@model()
export class Livro extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: false,
    required: true,
  })
  isbn: number;

  @property({
    type: 'string',
    required: true,
  })
  titulo: string;

  @property({
    type: 'string',
    required: true,
  })
  autor: string;

  @property({
    type: 'string',
    required: true,
  })
  editora: string;

  @property({
    type: 'number',
    required: true,
  })
  anodepublicacao: number;

  @property({
    type: 'number',
    required: true,
  })
  preco: number;

  @property({
    type: 'string',
    required: true,
  })
  categoria: string;

  @hasMany(() => Tem, {keyTo: 'isbnlivro'})
  tem: Tem[];

  @hasMany(() => Inclui, {keyTo: 'isbnlivro'})
  inclui: Inclui[];

  constructor(data?: Partial<Livro>) {
    super(data);
  }
}

export interface LivroRelations {
  // describe navigational properties here
}

export type LivroWithRelations = Livro & LivroRelations;
