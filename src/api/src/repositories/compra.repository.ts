import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, HasOneRepositoryFactory, HasManyRepositoryFactory} from '@loopback/repository';
import {LivrariasDataSource} from '../datasources';
import {Compra, CompraRelations, Endereco, Inclui, Realiza} from '../models';
import {EnderecoRepository} from './endereco.repository';
import {IncluiRepository} from './inclui.repository';
import {RealizaRepository} from './realiza.repository';

export class CompraRepository extends DefaultCrudRepository<
  Compra,
  typeof Compra.prototype.idcompra,
  CompraRelations
> {

  public readonly endereco: HasOneRepositoryFactory<Endereco, typeof Compra.prototype.idcompra>;

  public readonly inclui: HasManyRepositoryFactory<Inclui, typeof Compra.prototype.idcompra>;

  public readonly realiza: HasManyRepositoryFactory<Realiza, typeof Compra.prototype.idcompra>;

  constructor(
    @inject('datasources.livrarias') dataSource: LivrariasDataSource, @repository.getter('EnderecoRepository') protected enderecoRepositoryGetter: Getter<EnderecoRepository>, @repository.getter('IncluiRepository') protected incluiRepositoryGetter: Getter<IncluiRepository>, @repository.getter('RealizaRepository') protected realizaRepositoryGetter: Getter<RealizaRepository>,
  ) {
    super(Compra, dataSource);
    this.realiza = this.createHasManyRepositoryFactoryFor('realiza', realizaRepositoryGetter,);
    this.registerInclusionResolver('realiza', this.realiza.inclusionResolver);
    this.inclui = this.createHasManyRepositoryFactoryFor('inclui', incluiRepositoryGetter,);
    this.registerInclusionResolver('inclui', this.inclui.inclusionResolver);
    this.endereco = this.createHasOneRepositoryFactoryFor('endereco', enderecoRepositoryGetter);
    this.registerInclusionResolver('endereco', this.endereco.inclusionResolver);
  }
}
