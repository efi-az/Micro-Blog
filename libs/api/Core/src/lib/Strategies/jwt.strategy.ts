import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';

export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super(
      {
        jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
        ignoreExpiration: process.env.JWT_IGNORE_EXPIRATION,
        secretOrKey: process.env.JWT_SECRET_KEY,
      }
    );
  }

  validate(payload: any): any {
    return { ...payload }
  }
}