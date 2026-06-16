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
import {Realiza} from '../models';
import {RealizaRepository} from '../repositories';

export class RealizaControllerController {
  constructor(
    @repository(RealizaRepository)
    public realizaRepository : RealizaRepository,
  ) {}

  @post('/realiza')
  @response(200, {
    description: 'Realiza model instance',
    content: {'application/json': {schema: getModelSchemaRef(Realiza)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Realiza, {
            title: 'NewRealiza',
            
          }),
        },
      },
    })
    realiza: Realiza,
  ): Promise<Realiza> {
    return this.realizaRepository.create(realiza);
  }

  @get('/realiza/count')
  @response(200, {
    description: 'Realiza model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Realiza) where?: Where<Realiza>,
  ): Promise<Count> {
    return this.realizaRepository.count(where);
  }

  @get('/realiza')
  @response(200, {
    description: 'Array of Realiza model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Realiza, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Realiza) filter?: Filter<Realiza>,
  ): Promise<Realiza[]> {
    return this.realizaRepository.find(filter);
  }

  @patch('/realiza')
  @response(200, {
    description: 'Realiza PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Realiza, {partial: true}),
        },
      },
    })
    realiza: Realiza,
    @param.where(Realiza) where?: Where<Realiza>,
  ): Promise<Count> {
    return this.realizaRepository.updateAll(realiza, where);
  }

  @get('/realiza/{id}')
  @response(200, {
    description: 'Realiza model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Realiza, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(Realiza, {exclude: 'where'}) filter?: FilterExcludingWhere<Realiza>
  ): Promise<Realiza> {
    return this.realizaRepository.findById(id, filter);
  }

  @patch('/realiza/{id}')
  @response(204, {
    description: 'Realiza PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Realiza, {partial: true}),
        },
      },
    })
    realiza: Realiza,
  ): Promise<void> {
    await this.realizaRepository.updateById(id, realiza);
  }

  @put('/realiza/{id}')
  @response(204, {
    description: 'Realiza PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() realiza: Realiza,
  ): Promise<void> {
    await this.realizaRepository.replaceById(id, realiza);
  }

  @del('/realiza/{id}')
  @response(204, {
    description: 'Realiza DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.realizaRepository.deleteById(id);
  }
}
