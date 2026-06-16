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
import {Endereco} from '../models';
import {EnderecoRepository} from '../repositories';

export class EndrecoControllerController {
  constructor(
    @repository(EnderecoRepository)
    public enderecoRepository : EnderecoRepository,
  ) {}

  @post('/enderecos')
  @response(200, {
    description: 'Endereco model instance',
    content: {'application/json': {schema: getModelSchemaRef(Endereco)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Endereco, {
            title: 'NewEndereco',
            
          }),
        },
      },
    })
    endereco: Endereco,
  ): Promise<Endereco> {
    return this.enderecoRepository.create(endereco);
  }

  @get('/enderecos/count')
  @response(200, {
    description: 'Endereco model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Endereco) where?: Where<Endereco>,
  ): Promise<Count> {
    return this.enderecoRepository.count(where);
  }

  @get('/enderecos')
  @response(200, {
    description: 'Array of Endereco model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Endereco, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Endereco) filter?: Filter<Endereco>,
  ): Promise<Endereco[]> {
    return this.enderecoRepository.find(filter);
  }

  @patch('/enderecos')
  @response(200, {
    description: 'Endereco PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Endereco, {partial: true}),
        },
      },
    })
    endereco: Endereco,
    @param.where(Endereco) where?: Where<Endereco>,
  ): Promise<Count> {
    return this.enderecoRepository.updateAll(endereco, where);
  }

  @get('/enderecos/{id}')
  @response(200, {
    description: 'Endereco model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Endereco, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(Endereco, {exclude: 'where'}) filter?: FilterExcludingWhere<Endereco>
  ): Promise<Endereco> {
    return this.enderecoRepository.findById(id, filter);
  }

  @patch('/enderecos/{id}')
  @response(204, {
    description: 'Endereco PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Endereco, {partial: true}),
        },
      },
    })
    endereco: Endereco,
  ): Promise<void> {
    await this.enderecoRepository.updateById(id, endereco);
  }

  @put('/enderecos/{id}')
  @response(204, {
    description: 'Endereco PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() endereco: Endereco,
  ): Promise<void> {
    await this.enderecoRepository.replaceById(id, endereco);
  }

  @del('/enderecos/{id}')
  @response(204, {
    description: 'Endereco DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.enderecoRepository.deleteById(id);
  }
}
