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
  Loja,
  Aplicadoem,
} from '../models';
import {LojaRepository} from '../repositories';

export class LojaAplicadoemController {
  constructor(
    @repository(LojaRepository) protected lojaRepository: LojaRepository,
  ) { }

  @get('/lojas/{id}/aplicadoems', {
    responses: {
      '200': {
        description: 'Array of Loja has many Aplicadoem',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Aplicadoem)},
          },
        },
      },
    },
  })
  async find(
    @param.path.number('id') id: number,
    @param.query.object('filter') filter?: Filter<Aplicadoem>,
  ): Promise<Aplicadoem[]> {
    return this.lojaRepository.aplicadoem(id).find(filter);
  }

  @post('/lojas/{id}/aplicadoems', {
    responses: {
      '200': {
        description: 'Loja model instance',
        content: {'application/json': {schema: getModelSchemaRef(Aplicadoem)}},
      },
    },
  })
  async create(
    @param.path.number('id') id: typeof Loja.prototype.idloja,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Aplicadoem, {
            title: 'NewAplicadoemInLoja',
            exclude: ['percentagem'],
            optional: ['idloja']
          }),
        },
      },
    }) aplicadoem: Omit<Aplicadoem, 'percentagem'>,
  ): Promise<Aplicadoem> {
    return this.lojaRepository.aplicadoem(id).create(aplicadoem);
  }

  @patch('/lojas/{id}/aplicadoems', {
    responses: {
      '200': {
        description: 'Loja.Aplicadoem PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async patch(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Aplicadoem, {partial: true}),
        },
      },
    })
    aplicadoem: Partial<Aplicadoem>,
    @param.query.object('where', getWhereSchemaFor(Aplicadoem)) where?: Where<Aplicadoem>,
  ): Promise<Count> {
    return this.lojaRepository.aplicadoem(id).patch(aplicadoem, where);
  }

  @del('/lojas/{id}/aplicadoems', {
    responses: {
      '200': {
        description: 'Loja.Aplicadoem DELETE success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async delete(
    @param.path.number('id') id: number,
    @param.query.object('where', getWhereSchemaFor(Aplicadoem)) where?: Where<Aplicadoem>,
  ): Promise<Count> {
    return this.lojaRepository.aplicadoem(id).delete(where);
  }
}
