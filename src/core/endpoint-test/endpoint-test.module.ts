import { Module } from '@nestjs/common';
import { EndpointTestController } from './endpoint-test.controller';
import { EndpointTestService } from './endpoint-test.service';

@Module({
  controllers: [EndpointTestController],
  providers: [EndpointTestService],
})
export class EndpointTestModule {}
