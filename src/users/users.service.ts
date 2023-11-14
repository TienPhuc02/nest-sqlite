import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}
  async create(createUserDto: CreateUserDto) {
    const {
      emailAddress,
      firstName,
      lastName,
      name,
      gender,
      password,
      passwordConfirm,
      phoneNumber,
    } = createUserDto;
    const newUser = await this.usersRepository.save({
      emailAddress,
      firstName,
      lastName,
      name,
      gender,
      password,
      passwordConfirm,
      phoneNumber,
      userName: phoneNumber,
    });
    return {
      id: newUser.id,
      email: newUser.emailAddress,
    };
  }

  findAll() {
    return `This action returns all users`;
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
