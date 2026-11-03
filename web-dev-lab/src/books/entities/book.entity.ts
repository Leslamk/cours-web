import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { AuthorEntity } from '../../authors/entities/author.entity';

@Entity('book')
export class BookEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ name: 'title', type: 'varchar' })
  title: string;

  @Column({ name: 'publication_year', type: 'int' })
  publicationYear: number;

  @ManyToOne(() => AuthorEntity, { nullable: false })
  author: AuthorEntity;
}