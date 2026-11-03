import { Injectable } from '@nestjs/common';
import { AuthorModel, CreateAuthorModel } from './author.model';
import { AuthorRepository } from './author.repository';

@Injectable()
export class AuthorService {
  constructor(private readonly authorRepository: AuthorRepository) {}

  getAuthors(): Promise<AuthorModel[]> {
    return this.authorRepository.getAuthors();
  }

  createAuthor(input: CreateAuthorModel): Promise<AuthorModel> {
    return this.authorRepository.createAuthor(input);
  }
}