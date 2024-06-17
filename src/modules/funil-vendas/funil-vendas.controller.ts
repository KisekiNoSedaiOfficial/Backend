import { Controller, Get, Post, Param, Body, Delete } from '@nestjs/common';
import { FunilVendasService } from './funil-vendas.service';
import { FunilVendas } from './funil-vendas.entity';

@Controller('funis-vendas')
export class FunilVendasController {
  constructor(private readonly funilVendasService: FunilVendasService) {}

  @Get()
  findAll(): Promise<FunilVendas[]> {
    return this.funilVendasService.findAll();
  }

  @Post()
  create(@Body() funilVendas: FunilVendas): Promise<FunilVendas> {
    return this.funilVendasService.create(funilVendas);
  }

  @Delete(':id')
  remove(@Param('id') id: number): Promise<void> {
    return this.funilVendasService.remove(id);
  }
}
