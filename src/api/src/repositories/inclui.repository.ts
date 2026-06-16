import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {LivrariasDataSource} from '../datasources';
import {Inclui, IncluiRelations} from '../models';

export class IncluiRepository extends DefaultCrudRepository<
  Inclui,
  typeof Inclui.prototype.idcompra,
  IncluiRelations
> {
  constructor(
    @inject('datasources.livrarias') dataSource: LivrariasDataSource,
  ) {
    super(Inclui, dataSource);
  }
}
