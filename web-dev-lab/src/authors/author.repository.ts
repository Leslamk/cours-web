import { Injectable } from '@nestjs/common';
import { DataSource } from 'typeorm';
import { AuthorModel, CreateAuthorModel } from './author.model';
import { AuthorEntity } from './entities/author.entity';

@Injectable()
export class AuthorRepository {
  constructor(private readonly dataSource: DataSource) {}

  private get authors() {
    return this.dataSource.getRepository(AuthorEntity);
  }

  async getAuthors(): Promise<AuthorModel[]> {
    return this.authors.find();
  }

  async createAuthor(input: CreateAuthorModel): Promise<AuthorModel> {
    const entity = this.authors.create(input);
    return this.authors.save(entity);
  }
}