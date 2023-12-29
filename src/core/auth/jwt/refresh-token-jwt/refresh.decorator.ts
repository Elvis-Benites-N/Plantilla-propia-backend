import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { RefreshSCAToken } from 'src/common/interfaces/refresh-sca.interface';

export const Refresh = createParamDecorator(
  (data: unknown, ctx: ExecutionContext): RefreshSCAToken => {
    const request = ctx.switchToHttp().getRequest();
    return request.refresh as RefreshSCAToken;
  }
);
