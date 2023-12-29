import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Request } from 'express';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { getCookieAccessKey } from 'src/common/constants/cookie.constant';
import { ACCESS_TOKEN_KEY } from 'src/common/constants/keys.constant';
import { EncryptUtil } from 'src/common/utils/encrypt.util';

@Injectable()
export class AuthStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromExtractors([AuthStrategy.extractJWT]),
      ignoreExpiration: false,
      secretOrKey: process.env.JWT_ACCESS_KEY,
    });
  }

  private static extractJWT(req: Request): string | null {
    if (
      !req.cookies ||
      !(ACCESS_TOKEN_KEY in req.cookies) ||
      req.cookies[ACCESS_TOKEN_KEY].length === 0
    ) {
      return null;
    }

    const accessTokenDecrypted = EncryptUtil.decryptBase64(
      req.cookies[ACCESS_TOKEN_KEY],
      getCookieAccessKey()
    );

    if (!accessTokenDecrypted || accessTokenDecrypted.trim().length === 0)
      return null;

    return accessTokenDecrypted;
  }

  validate(payload: any): any {
    const { ...userData } = payload;

    delete userData['iat'];
    delete userData['exp'];

    return userData;
  }
}
