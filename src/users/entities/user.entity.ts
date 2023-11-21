import { Book } from 'src/books/entities/book.entity';
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('Users')
export class User {
  @PrimaryGeneratedColumn({ type: 'int', name: 'user_id', unsigned: true })
  id: number;
  @Column('varchar', { name: 'first_name', length: 255 })
  firstName: string;
  @Column('varchar', { name: 'last_name', length: 255 })
  lastName: string;
  @Column('varchar', { name: 'user_name', length: 255, unique: true })
  userName: string;
  @Column('varchar', { name: 'phone_number', length: 255, unique: true })
  phoneNumber: string;
  @Column('varchar', { name: 'password', length: 255 })
  password: string;
  @Column('varchar', { name: 'name', length: 255 })
  name: string;
  @Column('varchar', { name: 'gender', length: 255 })
  gender: string;
  @Column('varchar', { name: 'book', length: 255, default: '' })
  book?: string;
  @Column('varchar', { name: 'email_address', length: 255 })
  emailAddress: string;
  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;
  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;
  @DeleteDateColumn({ name: 'deleted_at' })
  deletedAt: Date;
  @Column({ name: 'deleted', default: false })
  deleted: boolean;
  @OneToMany(() => Book, (book) => book.user)
  books: Book[];
}

//https://blog.continium-labs.com/many-to-many-relations-with-typeorm-and-nestjs/
