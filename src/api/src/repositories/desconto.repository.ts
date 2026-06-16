import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, HasManyRepositoryFactory} from '@loopback/repository';
import {LivrariasDataSource} from '../datasources';
import {Desconto, DescontoRelations, Aplicadoem} from '../models';
import {AplicadoemRepository} from './aplicadoem.repository';

export class DescontoRepository extends DefaultCrudRepository<
  Desconto,
  typeof Desconto.prototype.percentagem,
  DescontoRelations
> {

  public readonly aplicadoem: HasManyRepositoryFactory<Aplicadoem, typeof Desconto.prototype.percentagem>;

  constructor(
    @inject('datasources.livrarias') dataSource: LivrariasDataSource, @repository.getter('AplicadoemRepository') protected aplicadoemRepositoryGetter: Getter<AplicadoemRepository>,
  ) {
    super(Desconto, dataSource);
    this.aplicadoem = this.createHasManyRepositoryFactoryFor('aplicadoem', aplicadoemRepositoryGetter,);
    this.registerInclusionResolver('aplicadoem', this.aplicadoem.inclusionResolver);
  }
}
