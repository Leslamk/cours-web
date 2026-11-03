import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('author')
export class AuthorEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ name: 'last_name', type: 'varchar' })
  lastName: string;

  @Column({ name: 'first_name', type: 'varchar' })
  firstName: string;
}