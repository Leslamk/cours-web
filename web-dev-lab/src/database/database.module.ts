import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthorEntity } from '../authors/entities/author.entity';
import { BookEntity } from '../books/entities/book.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqljs',
      location: 'db.sqlite',
      autoSave: true,
      entities: [BookEntity, AuthorEntity],
      synchronize: true,
    }),
  ],
})
export class DatabaseModule {}