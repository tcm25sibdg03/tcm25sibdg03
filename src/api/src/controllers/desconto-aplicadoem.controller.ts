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
  Desconto,
  Aplicadoem,
} from '../models';
import {DescontoRepository} from '../repositories';

export class DescontoAplicadoemController {
  constructor(
    @repository(DescontoRepository) protected descontoRepository: DescontoRepository,
  ) { }

  @get('/descontos/{id}/aplicadoems', {
    responses: {
      '200': {
        description: 'Array of Desconto has many Aplicadoem',
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
    return this.descontoRepository.aplicadoem(id).find(filter);
  }

  @post('/descontos/{id}/aplicadoems', {
    responses: {
      '200': {
        description: 'Desconto model instance',
        content: {'application/json': {schema: getModelSchemaRef(Aplicadoem)}},
      },
    },
  })
  async create(
    @param.path.number('id') id: typeof Desconto.prototype.percentagem,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Aplicadoem, {
            title: 'NewAplicadoemInDesconto',
            exclude: ['percentagem'],
            optional: ['percentagem']
          }),
        },
      },
    }) aplicadoem: Omit<Aplicadoem, 'percentagem'>,
  ): Promise<Aplicadoem> {
    return this.descontoRepository.aplicadoem(id).create(aplicadoem);
  }

  @patch('/descontos/{id}/aplicadoems', {
    responses: {
      '200': {
        description: 'Desconto.Aplicadoem PATCH success count',
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
    return this.descontoRepository.aplicadoem(id).patch(aplicadoem, where);
  }

  @del('/descontos/{id}/aplicadoems', {
    responses: {
      '200': {
        description: 'Desconto.Aplicadoem DELETE success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async delete(
    @param.path.number('id') id: number,
    @param.query.object('where', getWhereSchemaFor(Aplicadoem)) where?: Where<Aplicadoem>,
  ): Promise<Count> {
    return this.descontoRepository.aplicadoem(id).delete(where);
  }
}
