import {
  IsBoolean,
  IsDateString,
  IsNotEmpty,
  IsNumber,
  IsString,
} from 'class-validator';

export class CreateComissoeDto {
  @IsNotEmpty({ message: 'O número do pedido deve ser informado' })
  @IsNumber()
  ID_PEDIDO: number;

  @IsNotEmpty({ message: 'O valor do pedido deve ser informado' })
  VALOR_PEDIDO: string;

  @IsNotEmpty({ message: 'O valor da comissão deve ser informado' })
  VALOR_COMISSAO: number;

  @IsNotEmpty({ message: 'A data de recebimento deve ser informada' })
  @IsDateString()
  DATA_RECEBIMENTO: string;

  @IsNotEmpty({ message: 'A situação da comissão deve ser informada' })
  @IsBoolean()
  SITUACAO: boolean;

  @IsString()
  FORMA_PAGAMENTO: string;
}
