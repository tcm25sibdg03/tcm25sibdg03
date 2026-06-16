import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {LivrariasDataSource} from '../datasources';
import {Aplicadoem, AplicadoemRelations} from '../models';

export class AplicadoemRepository extends DefaultCrudRepository<
  Aplicadoem,
  typeof Aplicadoem.prototype.percentagem,
  AplicadoemRelations
> {
  constructor(
    @inject('datasources.livrarias') dataSource: LivrariasDataSource,
  ) {
    super(Aplicadoem, dataSource);
  }
}
