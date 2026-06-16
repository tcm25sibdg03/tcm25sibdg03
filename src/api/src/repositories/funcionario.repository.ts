import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, HasManyRepositoryFactory} from '@loopback/repository';
import {LivrariasDataSource} from '../datasources';
import {Funcionario, FuncionarioRelations, Compra} from '../models';
import {CompraRepository} from './compra.repository';

export class FuncionarioRepository extends DefaultCrudRepository<
  Funcionario,
  typeof Funcionario.prototype.codigo,
  FuncionarioRelations
> {

  public readonly compras: HasManyRepositoryFactory<Compra, typeof Funcionario.prototype.codigo>;

  constructor(
    @inject('datasources.livrarias') dataSource: LivrariasDataSource, @repository.getter('CompraRepository') protected compraRepositoryGetter: Getter<CompraRepository>,
  ) {
    super(Funcionario, dataSource);
    this.compras = this.createHasManyRepositoryFactoryFor('compras', compraRepositoryGetter,);
    this.registerInclusionResolver('compras', this.compras.inclusionResolver);
  }
}
