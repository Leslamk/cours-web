import { Injectable, NotFoundException } from '@nestjs/common';
import { v4 as uuid } from 'uuid';
import { BookModel, CreateBookModel, UpdateBookModel } from './book.model';
import { BookRepository } from './book.repository';

@Injectable()
export class BookService {
  constructor(private readonly bookRepository: BookRepository) {}

  getBooks(): BookModel[] {
    return this.bookRepository.getBooks();
  }

  getBook(id: string): BookModel {
    const book = this.bookRepository.getBookById(id);
    if (!book) {
      throw new NotFoundException('Book not found');
    }
    return book;
  }

  createBook(input: CreateBookModel): BookModel {
    return this.bookRepository.createBook({ id: uuid(), ...input });
  }

  updateBook(id: string, input: UpdateBookModel): BookModel {
    this.getBook(id);
    return this.bookRepository.updateBook(id, input) as BookModel;
  }

  deleteBook(id: string): void {
    this.getBook(id);
    this.bookRepository.deleteBook(id);
  }
}