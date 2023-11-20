import { IsNotEmpty } from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty({ message: 'Please Enter Your FirstName' })
  firstName: string;
  @IsNotEmpty({ message: 'Please Enter Your lastName' })
  lastName: string;
  @IsNotEmpty({ message: 'Please Enter Your phoneNumber' })
  phoneNumber: string;
  book: string;
  @IsNotEmpty({ message: 'Please Enter Your gender' })
  gender: string;
  @IsNotEmpty({ message: 'Please Enter Your name' })
  name: string;
  @IsNotEmpty({ message: 'Please Enter Your emailAddress' })
  emailAddress: string;
}
export class RegisterUserDto {
  @IsNotEmpty({ message: 'Please Enter Your FirstName' })
  firstName: string;
  @IsNotEmpty({ message: 'Please Enter Your lastName' })
  lastName: string;
  @IsNotEmpty({ message: 'Please Enter Your phoneNumber' })
  phoneNumber: string;
  @IsNotEmpty({ message: 'Please Enter Your password' })
  password: string;
  @IsNotEmpty({ message: 'Please Enter Your gender' })
  gender: string;
  @IsNotEmpty({ message: 'Please Enter Your passwordConfirm' })
  passwordConfirm: string;
  @IsNotEmpty({ message: 'Please Enter Your name' })
  name: string;
  @IsNotEmpty({ message: 'Please Enter Your emailAddress' })
  emailAddress: string;
}
