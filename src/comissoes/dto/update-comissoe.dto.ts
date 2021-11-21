import { PartialType } from '@nestjs/mapped-types';
import { CreateComissoeDto } from './create-comissoe.dto';

export class UpdateComissoeDto extends PartialType(CreateComissoeDto) {}
