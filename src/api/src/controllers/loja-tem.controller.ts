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
  Tem,
} from '../models';
import {LojaRepository} from '../repositories';

export class LojaTemController {
  constructor(
    @repository(LojaRepository) protected lojaRepository: LojaRepository,
  ) { }

  @get('/lojas/{id}/tems', {
    responses: {
      '200': {
        description: 'Array of Loja has many Tem',
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
    return this.lojaRepository.tem(id).find(filter);
  }

  @post('/lojas/{id}/tems', {
    responses: {
      '200': {
        description: 'Loja model instance',
        content: {'application/json': {schema: getModelSchemaRef(Tem)}},
      },
    },
  })
  async create(
    @param.path.number('id') id: typeof Loja.prototype.idloja,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Tem, {
            title: 'NewTemInLoja',
            exclude: ['idloja'],
            optional: ['idloja']
          }),
        },
      },
    }) tem: Omit<Tem, 'idloja'>,
  ): Promise<Tem> {
    return this.lojaRepository.tem(id).create(tem);
  }

  @patch('/lojas/{id}/tems', {
    responses: {
      '200': {
        description: 'Loja.Tem PATCH success count',
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
    return this.lojaRepository.tem(id).patch(tem, where);
  }

  @del('/lojas/{id}/tems', {
    responses: {
      '200': {
        description: 'Loja.Tem DELETE success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async delete(
    @param.path.number('id') id: number,
    @param.query.object('where', getWhereSchemaFor(Tem)) where?: Where<Tem>,
  ): Promise<Count> {
    return this.lojaRepository.tem(id).delete(where);
  }
}
