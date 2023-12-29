import { Injectable } from '@nestjs/common';
import { PruebaDTO } from './dto/prueba.dto';

@Injectable()
export class EndpointTestService {
  getPrueba() {
    return 'Llamando Microservicio, obteniendo data';
  }
  postPrueba(pruebaDto: PruebaDTO) {
    return (
      'Llamando Microservicio, insertando data con texto: ' +
      pruebaDto.stringPrueba
    );
  }
  patchPrueba(pruebaDto: PruebaDTO) {
    return (
      'Llamando Microservicio, actualizando data con texto: ' +
      pruebaDto.stringPrueba
    );
  }
  deletePrueba(id: number) {
    return 'Llamando Microservicio, eliminando data con id: ' + id;
  }
}
