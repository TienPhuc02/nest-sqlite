import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthService } from '../auth.service';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private authService: AuthService) {
    super();
  }

  async validate(username: string, password: string): Promise<any> {
    const user = await this.authService.validateUser(username, password);
    console.log("🚀 ~ file: local.stategy.ts:14 ~ LocalStrategy ~ validate ~ user:", user)
    if (!user) {
      throw new UnauthorizedException('Username/Password Không hợp lệ');
    }
    return user;
  }
}
