import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, HasManyRepositoryFactory} from '@loopback/repository';
import {LivrariasDataSource} from '../datasources';
import {Livro, LivroRelations, Tem, Inclui} from '../models';
import {TemRepository} from './tem.repository';
import {IncluiRepository} from './inclui.repository';

export class LivroRepository extends DefaultCrudRepository<
  Livro,
  typeof Livro.prototype.isbn,
  LivroRelations
> {

  public readonly tem: HasManyRepositoryFactory<Tem, typeof Livro.prototype.isbn>;

  public readonly inclui: HasManyRepositoryFactory<Inclui, typeof Livro.prototype.isbn>;

  constructor(
    @inject('datasources.livrarias') dataSource: LivrariasDataSource, @repository.getter('TemRepository') protected temRepositoryGetter: Getter<TemRepository>, @repository.getter('IncluiRepository') protected incluiRepositoryGetter: Getter<IncluiRepository>,
  ) {
    super(Livro, dataSource);
    this.inclui = this.createHasManyRepositoryFactoryFor('inclui', incluiRepositoryGetter,);
    this.registerInclusionResolver('inclui', this.inclui.inclusionResolver);
    this.tem = this.createHasManyRepositoryFactoryFor('tem', temRepositoryGetter,);
    this.registerInclusionResolver('tem', this.tem.inclusionResolver);
  }
}
