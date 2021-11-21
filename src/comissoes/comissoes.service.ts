import { Injectable } from '@nestjs/common';
import { PrismaService } from 'nestjs-prisma';
import { CreateComissoeDto } from './dto/create-comissoe.dto';
import { UpdateComissoeDto } from './dto/update-comissoe.dto';

@Injectable()
export class ComissoesService {
  constructor(private readonly prismaService: PrismaService) {}

  page_count = 10;

  create(createComissoeDto: CreateComissoeDto) {
    return this.prismaService.comissoes.create({
      data: createComissoeDto,
    });
  }

  findAll({ page, page_count }: { page?: number; page_count: number }) {
    return this.prismaService.comissoes.findMany({
      take: page_count,
      skip: (page - 1) * page_count,
      orderBy: {
        DATA_RECEBIMENTO: 'desc',
      },
    });
  }

  findOne(id_pedido: number) {
    return this.prismaService.comissoes.findFirst({
      where: {
        ID_PEDIDO: id_pedido,
      },
    });
  }

  update(id_comissao: number, updateComissoeDto: UpdateComissoeDto) {
    return this.prismaService.comissoes.update({
      where: {
        ID_COMISSAO: id_comissao,
      },
      data: updateComissoeDto,
    });
  }

  remove(id_comissao: number) {
    return this.prismaService.comissoes.delete({
      where: {
        ID_COMISSAO: id_comissao,
      },
    });
  }
}
