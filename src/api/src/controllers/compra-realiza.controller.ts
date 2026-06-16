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
  Realiza,
} from '../models';
import {CompraRepository} from '../repositories';

export class CompraRealizaController {
  constructor(
    @repository(CompraRepository) protected compraRepository: CompraRepository,
  ) { }

  @get('/compras/{id}/realizas', {
    responses: {
      '200': {
        description: 'Array of Compra has many Realiza',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Realiza)},
          },
        },
      },
    },
  })
  async find(
    @param.path.number('id') id: number,
    @param.query.object('filter') filter?: Filter<Realiza>,
  ): Promise<Realiza[]> {
    return this.compraRepository.realiza(id).find(filter);
  }

  @post('/compras/{id}/realizas', {
    responses: {
      '200': {
        description: 'Compra model instance',
        content: {'application/json': {schema: getModelSchemaRef(Realiza)}},
      },
    },
  })
  async create(
    @param.path.number('id') id: typeof Compra.prototype.idcompra,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Realiza, {
            title: 'NewRealizaInCompra',
            exclude: ['idloja'],
            optional: ['idcompra']
          }),
        },
      },
    }) realiza: Omit<Realiza, 'idloja'>,
  ): Promise<Realiza> {
    return this.compraRepository.realiza(id).create(realiza);
  }

  @patch('/compras/{id}/realizas', {
    responses: {
      '200': {
        description: 'Compra.Realiza PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async patch(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Realiza, {partial: true}),
        },
      },
    })
    realiza: Partial<Realiza>,
    @param.query.object('where', getWhereSchemaFor(Realiza)) where?: Where<Realiza>,
  ): Promise<Count> {
    return this.compraRepository.realiza(id).patch(realiza, where);
  }

  @del('/compras/{id}/realizas', {
    responses: {
      '200': {
        description: 'Compra.Realiza DELETE success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async delete(
    @param.path.number('id') id: number,
    @param.query.object('where', getWhereSchemaFor(Realiza)) where?: Where<Realiza>,
  ): Promise<Count> {
    return this.compraRepository.realiza(id).delete(where);
  }
}
