import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {LivrariasDataSource} from '../datasources';
import {Tem, TemRelations} from '../models';

export class TemRepository extends DefaultCrudRepository<
  Tem,
  typeof Tem.prototype.idloja,
  TemRelations
> {
  constructor(
    @inject('datasources.livrarias') dataSource: LivrariasDataSource,
  ) {
    super(Tem, dataSource);
  }
}
