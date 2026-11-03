import { IsString } from 'class-validator';

export class AuthorDto {
  @IsString()
  lastName: string;

  @IsString()
  firstName: string;
}