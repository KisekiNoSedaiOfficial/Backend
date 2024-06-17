import { Controller, Get, Post, Param, Body, Delete } from '@nestjs/common';
import { EmpresaService } from './empresa.service';
import { Empresa } from './empresa.entity';

@Controller('empresas')
export class EmpresaController {
  constructor(private readonly empresaService: EmpresaService) {}

  @Get()
  findAll(): Promise<Empresa[]> {
    return this.empresaService.findAll();
  }

  @Post(':clienteId')
  create(@Body() empresa: Empresa, @Param('clienteId') clienteId: number): Promise<Empresa> {
    return this.empresaService.create(empresa, clienteId);
  }

  @Delete(':id')
  remove(@Param('id') id: number): Promise<void> {
    return this.empresaService.remove(id);
  }
}
