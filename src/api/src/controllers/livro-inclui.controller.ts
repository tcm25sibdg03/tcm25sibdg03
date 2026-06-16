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
  Inclui,
} from '../models';
import {LivroRepository} from '../repositories';

export class LivroIncluiController {
  constructor(
    @repository(LivroRepository) protected livroRepository: LivroRepository,
  ) { }

  @get('/livros/{id}/incluis', {
    responses: {
      '200': {
        description: 'Array of Livro has many Inclui',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Inclui)},
          },
        },
      },
    },
  })
  async find(
    @param.path.number('id') id: number,
    @param.query.object('filter') filter?: Filter<Inclui>,
  ): Promise<Inclui[]> {
    return this.livroRepository.inclui(id).find(filter);
  }

  @post('/livros/{id}/incluis', {
    responses: {
      '200': {
        description: 'Livro model instance',
        content: {'application/json': {schema: getModelSchemaRef(Inclui)}},
      },
    },
  })
  async create(
    @param.path.number('id') id: typeof Livro.prototype.isbn,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Inclui, {
            title: 'NewIncluiInLivro',
            exclude: ['idcompra'],
            optional: ['isbnlivro']
          }),
        },
      },
    }) inclui: Omit<Inclui, 'idcompra'>,
  ): Promise<Inclui> {
    return this.livroRepository.inclui(id).create(inclui);
  }

  @patch('/livros/{id}/incluis', {
    responses: {
      '200': {
        description: 'Livro.Inclui PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async patch(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Inclui, {partial: true}),
        },
      },
    })
    inclui: Partial<Inclui>,
    @param.query.object('where', getWhereSchemaFor(Inclui)) where?: Where<Inclui>,
  ): Promise<Count> {
    return this.livroRepository.inclui(id).patch(inclui, where);
  }

  @del('/livros/{id}/incluis', {
    responses: {
      '200': {
        description: 'Livro.Inclui DELETE success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async delete(
    @param.path.number('id') id: number,
    @param.query.object('where', getWhereSchemaFor(Inclui)) where?: Where<Inclui>,
  ): Promise<Count> {
    return this.livroRepository.inclui(id).delete(where);
  }
}
