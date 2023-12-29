import { IsDefined, IsInt, IsString } from 'class-validator';

export class PruebaDTO {
  /**
   * @example 1
   */
  @IsInt()
  @IsDefined()
  idPrueba: number;

  /**
   * @example "String de prueba"
   */
  @IsString()
  @IsDefined()
  stringPrueba: string;

  toString() {
    return JSON.stringify({ ...this });
  }
}
