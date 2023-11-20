import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create-user.dto';
import { IsNotEmpty } from 'class-validator';

export class UpdateUserDto extends PartialType(CreateUserDto) {
  @IsNotEmpty({ message: 'Please Enter Your FirstName' })
  firstName: string;
  @IsNotEmpty({ message: 'Please Enter Your lastName' })
  lastName: string;
  @IsNotEmpty({ message: 'Please Enter Your password' })
  gender: string;
  @IsNotEmpty({ message: 'Please Enter Your phoneNumber' })
  phoneNumber: string;
  book: string;
  @IsNotEmpty({ message: 'Please Enter Your password' })
  password: string;
  @IsNotEmpty({ message: 'Please Enter Your passwordConfirm' })
  passwordConfirm: string;
  @IsNotEmpty({ message: 'Please Enter Your name' })
  name: string;
  @IsNotEmpty({ message: 'Please Enter Your emailAddress' })
  emailAddress: string;
}
