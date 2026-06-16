import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, HasManyRepositoryFactory} from '@loopback/repository';
import {LivrariasDataSource} from '../datasources';
import {Cliente, ClienteRelations, Compra} from '../models';
import {CompraRepository} from './compra.repository';

export class ClienteRepository extends DefaultCrudRepository<
  Cliente,
  typeof Cliente.prototype.numero,
  ClienteRelations
> {

  public readonly compras: HasManyRepositoryFactory<Compra, typeof Cliente.prototype.numero>;

  constructor(
    @inject('datasources.livrarias') dataSource: LivrariasDataSource, @repository.getter('CompraRepository') protected compraRepositoryGetter: Getter<CompraRepository>,
  ) {
    super(Cliente, dataSource);
    this.compras = this.createHasManyRepositoryFactoryFor('compras', compraRepositoryGetter,);
    this.registerInclusionResolver('compras', this.compras.inclusionResolver);
  }
}
