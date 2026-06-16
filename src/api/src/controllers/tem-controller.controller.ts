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
import {Tem} from '../models';
import {TemRepository} from '../repositories';

export class TemControllerController {
  constructor(
    @repository(TemRepository)
    public temRepository : TemRepository,
  ) {}

  @post('/tem')
  @response(200, {
    description: 'Tem model instance',
    content: {'application/json': {schema: getModelSchemaRef(Tem)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Tem, {
            title: 'NewTem',
            
          }),
        },
      },
    })
    tem: Tem,
  ): Promise<Tem> {
    return this.temRepository.create(tem);
  }

  @get('/tem/count')
  @response(200, {
    description: 'Tem model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Tem) where?: Where<Tem>,
  ): Promise<Count> {
    return this.temRepository.count(where);
  }

  @get('/tem')
  @response(200, {
    description: 'Array of Tem model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Tem, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Tem) filter?: Filter<Tem>,
  ): Promise<Tem[]> {
    return this.temRepository.find(filter);
  }

  @patch('/tem')
  @response(200, {
    description: 'Tem PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Tem, {partial: true}),
        },
      },
    })
    tem: Tem,
    @param.where(Tem) where?: Where<Tem>,
  ): Promise<Count> {
    return this.temRepository.updateAll(tem, where);
  }

  @get('/tem/{id}')
  @response(200, {
    description: 'Tem model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Tem, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(Tem, {exclude: 'where'}) filter?: FilterExcludingWhere<Tem>
  ): Promise<Tem> {
    return this.temRepository.findById(id, filter);
  }

  @patch('/tem/{id}')
  @response(204, {
    description: 'Tem PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Tem, {partial: true}),
        },
      },
    })
    tem: Tem,
  ): Promise<void> {
    await this.temRepository.updateById(id, tem);
  }

  @put('/tem/{id}')
  @response(204, {
    description: 'Tem PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() tem: Tem,
  ): Promise<void> {
    await this.temRepository.replaceById(id, tem);
  }

  @del('/tem/{id}')
  @response(204, {
    description: 'Tem DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.temRepository.deleteById(id);
  }
}
