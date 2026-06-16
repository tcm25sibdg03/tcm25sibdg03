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
  Realiza,
} from '../models';
import {LojaRepository} from '../repositories';

export class LojaRealizaController {
  constructor(
    @repository(LojaRepository) protected lojaRepository: LojaRepository,
  ) { }

  @get('/lojas/{id}/realizas', {
    responses: {
      '200': {
        description: 'Array of Loja has many Realiza',
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
    return this.lojaRepository.realiza(id).find(filter);
  }

  @post('/lojas/{id}/realizas', {
    responses: {
      '200': {
        description: 'Loja model instance',
        content: {'application/json': {schema: getModelSchemaRef(Realiza)}},
      },
    },
  })
  async create(
    @param.path.number('id') id: typeof Loja.prototype.idloja,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Realiza, {
            title: 'NewRealizaInLoja',
            exclude: ['idloja'],
            optional: ['idloja']
          }),
        },
      },
    }) realiza: Omit<Realiza, 'idloja'>,
  ): Promise<Realiza> {
    return this.lojaRepository.realiza(id).create(realiza);
  }

  @patch('/lojas/{id}/realizas', {
    responses: {
      '200': {
        description: 'Loja.Realiza PATCH success count',
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
    return this.lojaRepository.realiza(id).patch(realiza, where);
  }

  @del('/lojas/{id}/realizas', {
    responses: {
      '200': {
        description: 'Loja.Realiza DELETE success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async delete(
    @param.path.number('id') id: number,
    @param.query.object('where', getWhereSchemaFor(Realiza)) where?: Where<Realiza>,
  ): Promise<Count> {
    return this.lojaRepository.realiza(id).delete(where);
  }
}
