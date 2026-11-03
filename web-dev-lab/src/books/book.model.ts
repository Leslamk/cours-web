export type AuthorModel = {
  lastName: string;
  firstName: string;
};

export type BookModel = {
  id: string;
  title: string;
  publicationYear: number;
  author: AuthorModel;
};
import { Module } from '@nestjs/common';
import { BookController } from './book.controller';
import { BookService } from './book.service';

@Module({
  controllers: [BookController],
  providers: [BookService],
})
export class BookModule {}
export type CreateBookModel = Omit<BookModel, 'id'>;

export type UpdateBookModel = Partial<CreateBookModel>;