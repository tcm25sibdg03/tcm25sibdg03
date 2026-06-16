import {
  Count,
  CountSchema,
  Filter,
  FilterExcludingWhere,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getModelSchemaRef,
  patch,
  put,
  del,
  requestBody,
  response,
} from '@loopback/rest';
import {Desconto} from '../models';
import {DescontoRepository} from '../repositories';

export class DescontoControllerController {
  constructor(
    @repository(DescontoRepository)
    public descontoRepository : DescontoRepository,
  ) {}

  @post('/desconto')
  @response(200, {
    description: 'Desconto model instance',
    content: {'application/json': {schema: getModelSchemaRef(Desconto)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Desconto, {
            title: 'NewDesconto',
            
          }),
        },
      },
    })
    desconto: Desconto,
  ): Promise<Desconto> {
    return this.descontoRepository.create(desconto);
  }

  @get('/desconto/count')
  @response(200, {
    description: 'Desconto model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Desconto) where?: Where<Desconto>,
  ): Promise<Count> {
    return this.descontoRepository.count(where);
  }

  @get('/desconto')
  @response(200, {
    description: 'Array of Desconto model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Desconto, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Desconto) filter?: Filter<Desconto>,
  ): Promise<Desconto[]> {
    return this.descontoRepository.find(filter);
  }

  @patch('/desconto')
  @response(200, {
    description: 'Desconto PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Desconto, {partial: true}),
        },
      },
    })
    desconto: Desconto,
    @param.where(Desconto) where?: Where<Desconto>,
  ): Promise<Count> {
    return this.descontoRepository.updateAll(desconto, where);
  }

  @get('/desconto/{id}')
  @response(200, {
    description: 'Desconto model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Desconto, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(Desconto, {exclude: 'where'}) filter?: FilterExcludingWhere<Desconto>
  ): Promise<Desconto> {
    return this.descontoRepository.findById(id, filter);
  }

  @patch('/desconto/{id}')
  @response(204, {
    description: 'Desconto PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Desconto, {partial: true}),
        },
      },
    })
    desconto: Desconto,
  ): Promise<void> {
    await this.descontoRepository.updateById(id, desconto);
  }

  @put('/desconto/{id}')
  @response(204, {
    description: 'Desconto PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() desconto: Desconto,
  ): Promise<void> {
    await this.descontoRepository.replaceById(id, desconto);
  }

  @del('/desconto/{id}')
  @response(204, {
    description: 'Desconto DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.descontoRepository.deleteById(id);
  }
}
