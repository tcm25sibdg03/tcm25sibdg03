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
  Endereco,
} from '../models';
import {CompraRepository} from '../repositories';

export class CompraEnderecoController {
  constructor(
    @repository(CompraRepository) protected compraRepository: CompraRepository,
  ) { }

  @get('/compras/{id}/endereco', {
    responses: {
      '200': {
        description: 'Compra has one Endereco',
        content: {
          'application/json': {
            schema: getModelSchemaRef(Endereco),
          },
        },
      },
    },
  })
  async get(
    @param.path.number('id') id: number,
    @param.query.object('filter') filter?: Filter<Endereco>,
  ): Promise<Endereco> {
    return this.compraRepository.endereco(id).get(filter);
  }

  @post('/compras/{id}/endereco', {
    responses: {
      '200': {
        description: 'Compra model instance',
        content: {'application/json': {schema: getModelSchemaRef(Endereco)}},
      },
    },
  })
  async create(
    @param.path.number('id') id: typeof Compra.prototype.idcompra,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Endereco, {
            title: 'NewEnderecoInCompra',
            exclude: ['idencomenda'],
            optional: ['idencomenda']
          }),
        },
      },
    }) endereco: Omit<Endereco, 'idencomenda'>,
  ): Promise<Endereco> {
    return this.compraRepository.endereco(id).create(endereco);
  }

  @patch('/compras/{id}/endereco', {
    responses: {
      '200': {
        description: 'Compra.Endereco PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async patch(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Endereco, {partial: true}),
        },
      },
    })
    endereco: Partial<Endereco>,
    @param.query.object('where', getWhereSchemaFor(Endereco)) where?: Where<Endereco>,
  ): Promise<Count> {
    return this.compraRepository.endereco(id).patch(endereco, where);
  }

  @del('/compras/{id}/endereco', {
    responses: {
      '200': {
        description: 'Compra.Endereco DELETE success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async delete(
    @param.path.number('id') id: number,
    @param.query.object('where', getWhereSchemaFor(Endereco)) where?: Where<Endereco>,
  ): Promise<Count> {
    return this.compraRepository.endereco(id).delete(where);
  }
}
