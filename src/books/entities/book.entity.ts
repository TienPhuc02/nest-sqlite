import { User } from 'src/users/entities/user.entity';
import { Entity, JoinTable, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
@Entity('Books')
export class Book {
  @PrimaryGeneratedColumn({ type: 'int', name: 'user_id', unsigned: true })
  id: number;
  @ManyToOne(() => User, (user) => user.books)
  @JoinTable({ name: 'user_id' })
  user: User;
}
