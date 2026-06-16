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
  Funcionario,
  Compra,
} from '../models';
import {FuncionarioRepository} from '../repositories';

export class FuncionarioCompraController {
  constructor(
    @repository(FuncionarioRepository) protected funcionarioRepository: FuncionarioRepository,
  ) { }

  @get('/funcionarios/{id}/compras', {
    responses: {
      '200': {
        description: 'Array of Funcionario has many Compra',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Compra)},
          },
        },
      },
    },
  })
  async find(
    @param.path.number('id') id: number,
    @param.query.object('filter') filter?: Filter<Compra>,
  ): Promise<Compra[]> {
    return this.funcionarioRepository.compras(id).find(filter);
  }

  @post('/funcionarios/{id}/compras', {
    responses: {
      '200': {
        description: 'Funcionario model instance',
        content: {'application/json': {schema: getModelSchemaRef(Compra)}},
      },
    },
  })
  async create(
    @param.path.number('id') id: typeof Funcionario.prototype.codigo,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Compra, {
            title: 'NewCompraInFuncionario',
            exclude: ['idcompra'],
            optional: ['codigofuncionario']
          }),
        },
      },
    }) compra: Omit<Compra, 'idcompra'>,
  ): Promise<Compra> {
    return this.funcionarioRepository.compras(id).create(compra);
  }

  @patch('/funcionarios/{id}/compras', {
    responses: {
      '200': {
        description: 'Funcionario.Compra PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async patch(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Compra, {partial: true}),
        },
      },
    })
    compra: Partial<Compra>,
    @param.query.object('where', getWhereSchemaFor(Compra)) where?: Where<Compra>,
  ): Promise<Count> {
    return this.funcionarioRepository.compras(id).patch(compra, where);
  }

  @del('/funcionarios/{id}/compras', {
    responses: {
      '200': {
        description: 'Funcionario.Compra DELETE success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async delete(
    @param.path.number('id') id: number,
    @param.query.object('where', getWhereSchemaFor(Compra)) where?: Where<Compra>,
  ): Promise<Count> {
    return this.funcionarioRepository.compras(id).delete(where);
  }
}
