import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async validateUser(username: string, pass: string): Promise<any> {
    const user = await this.usersService.findOneByUsername(username);
    console.log("🚀 ~ file: auth.service.ts:14 ~ AuthService ~ validateUser ~ user:", user)
    if (user && user.password === pass) {
      const { password, ...result } = user;
      console.log("🚀 ~ file: auth.service.ts:17 ~ AuthService ~ validateUser ~ result:", result)
      return result;
    }
    return null;
  }
  async login(user: any) {
    console.log("🚀 ~ file: auth.service.ts:27 ~ AuthService ~ login ~ user:", user)
    const payload = { userName: user.username };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
