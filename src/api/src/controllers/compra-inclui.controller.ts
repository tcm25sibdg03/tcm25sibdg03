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
  Compra,
  Inclui,
} from '../models';
import {CompraRepository} from '../repositories';

export class CompraIncluiController {
  constructor(
    @repository(CompraRepository) protected compraRepository: CompraRepository,
  ) { }

  @get('/compras/{id}/incluis', {
    responses: {
      '200': {
        description: 'Array of Compra has many Inclui',
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
    return this.compraRepository.inclui(id).find(filter);
  }

  @post('/compras/{id}/incluis', {
    responses: {
      '200': {
        description: 'Compra model instance',
        content: {'application/json': {schema: getModelSchemaRef(Inclui)}},
      },
    },
  })
  async create(
    @param.path.number('id') id: typeof Compra.prototype.idcompra,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Inclui, {
            title: 'NewIncluiInCompra',
            exclude: ['idcompra'],
            optional: ['idcompra']
          }),
        },
      },
    }) inclui: Omit<Inclui, 'idcompra'>,
  ): Promise<Inclui> {
    return this.compraRepository.inclui(id).create(inclui);
  }

  @patch('/compras/{id}/incluis', {
    responses: {
      '200': {
        description: 'Compra.Inclui PATCH success count',
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
    return this.compraRepository.inclui(id).patch(inclui, where);
  }

  @del('/compras/{id}/incluis', {
    responses: {
      '200': {
        description: 'Compra.Inclui DELETE success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async delete(
    @param.path.number('id') id: number,
    @param.query.object('where', getWhereSchemaFor(Inclui)) where?: Where<Inclui>,
  ): Promise<Count> {
    return this.compraRepository.inclui(id).delete(where);
  }
}
