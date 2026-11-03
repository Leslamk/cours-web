import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { BookService } from './book.service';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';

@Controller('books')
export class BookController {
  constructor(private readonly bookService: BookService) {}

  @Get()
  getBooks() {
    return this.bookService.getBooks();
  }

  @Get(':id')
  getBook(@Param('id') id: string) {
    return this.bookService.getBook(id);
  }

  @Post()
  createBook(@Body() body: CreateBookDto) {
    return this.bookService.createBook(body);
  }

  @Patch(':id')
  updateBook(@Param('id') id: string, @Body() body: UpdateBookDto) {
    return this.bookService.updateBook(id, body);
  }

  @Delete(':id')
  deleteBook(@Param('id') id: string) {
    this.bookService.deleteBook(id);
  }
}