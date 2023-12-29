import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { EndpointTestModule } from './endpoint-test/endpoint-test.module';
import { HealthModule } from './health/health.module';

@Module({
  imports: [
    AuthModule,
    EndpointTestModule,
    HealthModule,
  ],
})
export class CoreModule {}
