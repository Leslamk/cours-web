import { Type } from 'class-transformer';
import { IsInt, IsOptional, IsString, Max, Min, ValidateNested } from 'class-validator';
import { AuthorDto } from './author.dto';

export class UpdateBookDto {
  @IsOptional()
  @IsString()
  title?: string;

  @IsOptional()
  @IsInt()
  @Min(1500)
  @Max(2025)
  publicationYear?: number;

  @IsOptional()
  @ValidateNested()
  @Type(() => AuthorDto)
  author?: AuthorDto;
}