import {
  Count,
  CountSchema,
  Filter,
  repository,
  Where,
} from '@loopback/repository';
import {
  del,
  get,
  getModelSchemaRef,
  getWhereSchemaFor,
  param,
  patch,
  post,
  requestBody,
} from '@loopback/rest';
import {
  Livro,
  Tem,
} from '../models';
import {LivroRepository} from '../repositories';

export class LivroTemController {
  constructor(
    @repository(LivroRepository) protected livroRepository: LivroRepository,
  ) { }

  @get('/livros/{id}/tems', {
    responses: {
      '200': {
        description: 'Array of Livro has many Tem',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Tem)},
          },
        },
      },
    },
  })
  async find(
    @param.path.number('id') id: number,
    @param.query.object('filter') filter?: Filter<Tem>,
  ): Promise<Tem[]> {
    return this.livroRepository.tem(id).find(filter);
  }

  @post('/livros/{id}/tems', {
    responses: {
      '200': {
        description: 'Livro model instance',
        content: {'application/json': {schema: getModelSchemaRef(Tem)}},
      },
    },
  })
  async create(
    @param.path.number('id') id: typeof Livro.prototype.isbn,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Tem, {
            title: 'NewTemInLivro',
            exclude: ['idloja'],
            optional: ['isbnlivro']
          }),
        },
      },
    }) tem: Omit<Tem, 'idloja'>,
  ): Promise<Tem> {
    return this.livroRepository.tem(id).create(tem);
  }

  @patch('/livros/{id}/tems', {
    responses: {
      '200': {
        description: 'Livro.Tem PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async patch(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Tem, {partial: true}),
        },
      },
    })
    tem: Partial<Tem>,
    @param.query.object('where', getWhereSchemaFor(Tem)) where?: Where<Tem>,
  ): Promise<Count> {
    return this.livroRepository.tem(id).patch(tem, where);
  }

  @del('/livros/{id}/tems', {
    responses: {
      '200': {
        description: 'Livro.Tem DELETE success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async delete(
    @param.path.number('id') id: number,
    @param.query.object('where', getWhereSchemaFor(Tem)) where?: Where<Tem>,
  ): Promise<Count> {
    return this.livroRepository.tem(id).delete(where);
  }
}
