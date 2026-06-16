import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {LivrariasDataSource} from '../datasources';
import {Endereco, EnderecoRelations} from '../models';

export class EnderecoRepository extends DefaultCrudRepository<
  Endereco,
  typeof Endereco.prototype.idencomenda,
  EnderecoRelations
> {
  constructor(
    @inject('datasources.livrarias') dataSource: LivrariasDataSource,
  ) {
    super(Endereco, dataSource);
  }
}
