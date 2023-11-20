import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateUserDto, RegisterUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import aqp from 'api-query-params';

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
      book,
      phoneNumber,
    } = createUserDto;
    const newUser = await this.usersRepository.save({
      emailAddress,
      firstName,
      lastName,
      name,
      book,
      gender,
      password: '123456',
      phoneNumber,
      userName: phoneNumber,
    });
    return {
      id: newUser.id,
      email: newUser.emailAddress,
    };
  }

  async findAll(current: number, pageSize: number, qs: string) {
    const { filter, sort } = aqp(qs);
    delete filter.current;
    delete filter.pageSize;
    const offset: number = (+current - 1) * +pageSize;
    const defaultLimit = +pageSize ? +pageSize : 10;

    const [result, totalItems] = await this.usersRepository.findAndCount({
      where: filter,
      order: sort,
      skip: offset,
      take: defaultLimit,
    });

    const totalPages = Math.ceil(totalItems / defaultLimit);

    return {
      meta: {
        current: current, //trang hien tai
        pageSize: pageSize, // so luong ban ghi 1 trang
        pages: totalPages, //tong so trang
        total: totalItems, //tong so ban ghi
      },
      result,
    };
  }
  async findOne(id: number) {
    const userToUpdate = await this.usersRepository.findOne({
      where: { id: id },
    });
    if (!userToUpdate) {
      throw new BadRequestException('User not found');
    } else {
      return userToUpdate;
    }
  }
  async findOneByUsername(username: string) {
    try {
      const findUsername = await this.usersRepository.findOne({
        where: { userName: username },
      });
      console.log('User found:', findUsername);
      return findUsername;
    } catch (error) {
      console.error('Error finding user by username:', error);
      throw new BadRequestException('User not found');
    }
  }
  async update(id: number, updateUserDto: UpdateUserDto) {
    const userToUpdate = await this.usersRepository.findOne({
      where: { id: id },
    });
    if (!userToUpdate) {
      throw new Error('User not found');
    }
    const updatedUser = await this.usersRepository.save({
      ...userToUpdate,
      ...updateUserDto,
    });
    return updatedUser;
  }

  async remove(id: number) {
    const userToRemove = await this.usersRepository.findOne({
      where: { id: id },
    });
    if (!userToRemove) {
      throw new Error('User not found');
    }
    userToRemove.deleted = true;
    await this.usersRepository.save(userToRemove);
    await this.usersRepository.softDelete(id);
  }
  async register(registerUserDto: RegisterUserDto) {
    const {
      emailAddress,
      firstName,
      lastName,
      name,
      gender,
      passwordConfirm,
      password,
      phoneNumber,
    } = registerUserDto;
    if (password !== passwordConfirm) {
      throw new BadRequestException('mat khau xac thuc khong chinh xac');
    }
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
    return newUser;
  }
}
