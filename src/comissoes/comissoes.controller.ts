import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UsePipes,
  ValidationPipe,
  Query,
} from '@nestjs/common';
import { ComissoesService } from './comissoes.service';
import { CreateComissoeDto } from './dto/create-comissoe.dto';
import { UpdateComissoeDto } from './dto/update-comissoe.dto';

@Controller('comissoes')
export class ComissoesController {
  constructor(private readonly comissoesService: ComissoesService) {}

  page_count = 10;

  @Post()
  @UsePipes(ValidationPipe)
  create(@Body() createComissoeDto: CreateComissoeDto) {
    return this.comissoesService.create(createComissoeDto);
  }

  @Get()
  findAll(
    @Query('page') page: number,
    @Query('page_count') page_count: number,
  ) {
    page = page ? +page : 1;
    page_count = page_count ? +page_count : this.page_count;

    return this.comissoesService.findAll({ page, page_count });
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.comissoesService.findOne(+id);
  }

  @Patch(':id')
  @UsePipes(ValidationPipe)
  update(
    @Param('id') id: string,
    @Body() updateComissoeDto: UpdateComissoeDto,
  ) {
    return this.comissoesService.update(+id, updateComissoeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.comissoesService.remove(+id);
  }
}
