import { Type } from 'class-transformer';
import { IsInt, IsString, Max, Min, ValidateNested } from 'class-validator';
import { AuthorDto } from './author.dto';

export class CreateBookDto {
  @IsString()
  title: string;

  @IsInt()
  @Min(1500)
  @Max(2025)
  publicationYear: number;

  @ValidateNested()
  @Type(() => AuthorDto)
  author: AuthorDto;
}