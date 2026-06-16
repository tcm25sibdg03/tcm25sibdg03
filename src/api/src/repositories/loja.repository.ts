import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, HasManyRepositoryFactory} from '@loopback/repository';
import {LivrariasDataSource} from '../datasources';
import {Loja, LojaRelations, Tem, Aplicadoem, Realiza} from '../models';
import {TemRepository} from './tem.repository';
import {AplicadoemRepository} from './aplicadoem.repository';
import {RealizaRepository} from './realiza.repository';

export class LojaRepository extends DefaultCrudRepository<
  Loja,
  typeof Loja.prototype.idloja,
  LojaRelations
> {

  public readonly tem: HasManyRepositoryFactory<Tem, typeof Loja.prototype.idloja>;

  public readonly aplicadoem: HasManyRepositoryFactory<Aplicadoem, typeof Loja.prototype.idloja>;

  public readonly realiza: HasManyRepositoryFactory<Realiza, typeof Loja.prototype.idloja>;

  constructor(
    @inject('datasources.livrarias') dataSource: LivrariasDataSource, @repository.getter('TemRepository') protected temRepositoryGetter: Getter<TemRepository>, @repository.getter('AplicadoemRepository') protected aplicadoemRepositoryGetter: Getter<AplicadoemRepository>, @repository.getter('RealizaRepository') protected realizaRepositoryGetter: Getter<RealizaRepository>,
  ) {
    super(Loja, dataSource);
    this.realiza = this.createHasManyRepositoryFactoryFor('realiza', realizaRepositoryGetter,);
    this.registerInclusionResolver('realiza', this.realiza.inclusionResolver);
    this.aplicadoem = this.createHasManyRepositoryFactoryFor('aplicadoem', aplicadoemRepositoryGetter,);
    this.registerInclusionResolver('aplicadoem', this.aplicadoem.inclusionResolver);
    this.tem = this.createHasManyRepositoryFactoryFor('tem', temRepositoryGetter,);
    this.registerInclusionResolver('tem', this.tem.inclusionResolver);
  }
}
