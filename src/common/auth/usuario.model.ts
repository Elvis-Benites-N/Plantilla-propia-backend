import {
  IsDefined,
  IsInt,
  IsNotEmpty,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';

export class UsuarioModel {
  @IsDefined()
  @IsInt()
  @Min(1)
  id: number;

  @IsDefined()
  @IsInt()
  @Min(1)
  idUnidep: number;

  @IsNotEmpty()
  @IsString()
  nombres: string;

  @IsNotEmpty()
  @IsString()
  apellidos: string;

  @IsNotEmpty()
  @IsString()
  email: string;

  @IsNotEmpty()
  @IsString()
  numeroDocumento: string;

  @IsOptional()
  @IsInt()
  @Min(1)
  idUsuarioSistema: number;

  @IsOptional()
  @IsInt()
  @Min(1)
  idUsuarioSistemaModulo: number;

  @IsOptional()
  @IsString()
  ip: string;

  @IsOptional()
  @IsString()
  cliente: string;
}
