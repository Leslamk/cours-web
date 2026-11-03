import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthorModule } from './authors/author.module';
import { BookModule } from './books/book.module';
import { DatabaseModule } from './database/database.module';

@Module({
  imports: [DatabaseModule, BookModule, AuthorModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}