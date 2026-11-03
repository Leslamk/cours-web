import { Injectable } from '@nestjs/common';
import { BookModel, UpdateBookModel } from './book.model';

@Injectable()
export class BookRepository {
  private books: BookModel[] = [];

  getBooks(): BookModel[] {
    return this.books;
  }

  getBookById(id: string): BookModel | undefined {
    return this.books.find((book) => book.id === id);
  }

  createBook(book: BookModel): BookModel {
    this.books.push(book);
    return book;
  }

  updateBook(id: string, input: UpdateBookModel): BookModel | undefined {
    const book = this.getBookById(id);
    if (!book) return undefined;
    Object.assign(book, input);
    return book;
  }

  deleteBook(id: string): void {
    this.books = this.books.filter((book) => book.id !== id);
  }
}