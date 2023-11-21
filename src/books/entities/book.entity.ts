import { User } from "src/users/entities/user.entity";
import { ManyToOne } from "typeorm";

export class Book {
  @ManyToOne(() => User, (user) => user.books)
  user: User;
}
