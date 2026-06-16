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
import {Inclui} from '../models';
import {IncluiRepository} from '../repositories';

export class IncluiControllerController {
  constructor(
    @repository(IncluiRepository)
    public incluiRepository : IncluiRepository,
  ) {}

  @post('/inclui')
  @response(200, {
    description: 'Inclui model instance',
    content: {'application/json': {schema: getModelSchemaRef(Inclui)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Inclui, {
            title: 'NewInclui',
            
          }),
        },
      },
    })
    inclui: Inclui,
  ): Promise<Inclui> {
    return this.incluiRepository.create(inclui);
  }

  @get('/inclui/count')
  @response(200, {
    description: 'Inclui model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Inclui) where?: Where<Inclui>,
  ): Promise<Count> {
    return this.incluiRepository.count(where);
  }

  @get('/inclui')
  @response(200, {
    description: 'Array of Inclui model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Inclui, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Inclui) filter?: Filter<Inclui>,
  ): Promise<Inclui[]> {
    return this.incluiRepository.find(filter);
  }

  @patch('/inclui')
  @response(200, {
    description: 'Inclui PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Inclui, {partial: true}),
        },
      },
    })
    inclui: Inclui,
    @param.where(Inclui) where?: Where<Inclui>,
  ): Promise<Count> {
    return this.incluiRepository.updateAll(inclui, where);
  }

  @get('/inclui/{id}')
  @response(200, {
    description: 'Inclui model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Inclui, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(Inclui, {exclude: 'where'}) filter?: FilterExcludingWhere<Inclui>
  ): Promise<Inclui> {
    return this.incluiRepository.findById(id, filter);
  }

  @patch('/inclui/{id}')
  @response(204, {
    description: 'Inclui PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Inclui, {partial: true}),
        },
      },
    })
    inclui: Inclui,
  ): Promise<void> {
    await this.incluiRepository.updateById(id, inclui);
  }

  @put('/inclui/{id}')
  @response(204, {
    description: 'Inclui PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() inclui: Inclui,
  ): Promise<void> {
    await this.incluiRepository.replaceById(id, inclui);
  }

  @del('/inclui/{id}')
  @response(204, {
    description: 'Inclui DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.incluiRepository.deleteById(id);
  }
}
