import { Body, Controller, Get, Post } from '@nestjs/common';
import { AuthorService } from './author.service';
import { CreateAuthorDto } from './dto/create-author.dto';

@Controller('authors')
export class AuthorController {
  constructor(private readonly authorService: AuthorService) {}

  @Get()
  getAuthors() {
    return this.authorService.getAuthors();
  }

  @Post()
  createAuthor(@Body() body: CreateAuthorDto) {
    return this.authorService.createAuthor(body);
  }
}