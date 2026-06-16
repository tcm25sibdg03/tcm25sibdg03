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
import {Aplicadoem} from '../models';
import {AplicadoemRepository} from '../repositories';

export class AplicadoemControllerController {
  constructor(
    @repository(AplicadoemRepository)
    public aplicadoemRepository : AplicadoemRepository,
  ) {}

  @post('/aplicadoem')
  @response(200, {
    description: 'Aplicadoem model instance',
    content: {'application/json': {schema: getModelSchemaRef(Aplicadoem)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Aplicadoem, {
            title: 'NewAplicadoem',
            
          }),
        },
      },
    })
    aplicadoem: Aplicadoem,
  ): Promise<Aplicadoem> {
    return this.aplicadoemRepository.create(aplicadoem);
  }

  @get('/aplicadoem/count')
  @response(200, {
    description: 'Aplicadoem model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Aplicadoem) where?: Where<Aplicadoem>,
  ): Promise<Count> {
    return this.aplicadoemRepository.count(where);
  }

  @get('/aplicadoem')
  @response(200, {
    description: 'Array of Aplicadoem model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Aplicadoem, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Aplicadoem) filter?: Filter<Aplicadoem>,
  ): Promise<Aplicadoem[]> {
    return this.aplicadoemRepository.find(filter);
  }

  @patch('/aplicadoem')
  @response(200, {
    description: 'Aplicadoem PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Aplicadoem, {partial: true}),
        },
      },
    })
    aplicadoem: Aplicadoem,
    @param.where(Aplicadoem) where?: Where<Aplicadoem>,
  ): Promise<Count> {
    return this.aplicadoemRepository.updateAll(aplicadoem, where);
  }

  @get('/aplicadoem/{id}')
  @response(200, {
    description: 'Aplicadoem model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Aplicadoem, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(Aplicadoem, {exclude: 'where'}) filter?: FilterExcludingWhere<Aplicadoem>
  ): Promise<Aplicadoem> {
    return this.aplicadoemRepository.findById(id, filter);
  }

  @patch('/aplicadoem/{id}')
  @response(204, {
    description: 'Aplicadoem PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Aplicadoem, {partial: true}),
        },
      },
    })
    aplicadoem: Aplicadoem,
  ): Promise<void> {
    await this.aplicadoemRepository.updateById(id, aplicadoem);
  }

  @put('/aplicadoem/{id}')
  @response(204, {
    description: 'Aplicadoem PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() aplicadoem: Aplicadoem,
  ): Promise<void> {
    await this.aplicadoemRepository.replaceById(id, aplicadoem);
  }

  @del('/aplicadoem/{id}')
  @response(204, {
    description: 'Aplicadoem DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.aplicadoemRepository.deleteById(id);
  }
}
