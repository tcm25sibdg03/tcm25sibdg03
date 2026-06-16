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
import {Loja} from '../models';
import {LojaRepository} from '../repositories';

export class LojaControllerController {
  constructor(
    @repository(LojaRepository)
    public lojaRepository : LojaRepository,
  ) {}

  @post('/lojas')
  @response(200, {
    description: 'Loja model instance',
    content: {'application/json': {schema: getModelSchemaRef(Loja)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Loja, {
            title: 'NewLoja',
            
          }),
        },
      },
    })
    loja: Loja,
  ): Promise<Loja> {
    return this.lojaRepository.create(loja);
  }

  @get('/lojas/count')
  @response(200, {
    description: 'Loja model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Loja) where?: Where<Loja>,
  ): Promise<Count> {
    return this.lojaRepository.count(where);
  }

  @get('/lojas')
  @response(200, {
    description: 'Array of Loja model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Loja, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Loja) filter?: Filter<Loja>,
  ): Promise<Loja[]> {
    return this.lojaRepository.find(filter);
  }

  @patch('/lojas')
  @response(200, {
    description: 'Loja PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Loja, {partial: true}),
        },
      },
    })
    loja: Loja,
    @param.where(Loja) where?: Where<Loja>,
  ): Promise<Count> {
    return this.lojaRepository.updateAll(loja, where);
  }

  @get('/lojas/{id}')
  @response(200, {
    description: 'Loja model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Loja, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(Loja, {exclude: 'where'}) filter?: FilterExcludingWhere<Loja>
  ): Promise<Loja> {
    return this.lojaRepository.findById(id, filter);
  }

  @patch('/lojas/{id}')
  @response(204, {
    description: 'Loja PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Loja, {partial: true}),
        },
      },
    })
    loja: Loja,
  ): Promise<void> {
    await this.lojaRepository.updateById(id, loja);
  }

  @put('/lojas/{id}')
  @response(204, {
    description: 'Loja PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() loja: Loja,
  ): Promise<void> {
    await this.lojaRepository.replaceById(id, loja);
  }

  @del('/lojas/{id}')
  @response(204, {
    description: 'Loja DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.lojaRepository.deleteById(id);
  }
}
