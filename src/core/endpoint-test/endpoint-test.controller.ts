import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { PruebaDTO } from './dto/prueba.dto';
import { EndpointTestService } from './endpoint-test.service';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Test')
@Controller('endpoint-test')
export class EndpointTestController {
  constructor(private readonly service: EndpointTestService) {}

  @Get()
  getPrueba() {
    return this.service.getPrueba();
  }
  @Post()
  postPrueba(
    @Body()
    query: PruebaDTO
  ) {
    return this.service.postPrueba(query);
  }
  @Patch()
  patchPrueba(
    @Body()
    query: PruebaDTO
  ) {
    return this.service.patchPrueba(query);
  }
  @Delete('/:id')
  deletePrueba(
    @Param('id')
    id: number
  ) {
    return this.service.deletePrueba(id);
  }
}
