import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {LivrariasDataSource} from '../datasources';
import {Realiza, RealizaRelations} from '../models';

export class RealizaRepository extends DefaultCrudRepository<
  Realiza,
  typeof Realiza.prototype.idloja,
  RealizaRelations
> {
  constructor(
    @inject('datasources.livrarias') dataSource: LivrariasDataSource,
  ) {
    super(Realiza, dataSource);
  }
}
