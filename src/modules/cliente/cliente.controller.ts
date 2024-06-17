import { Controller, Get, Post, Param, Body, Delete } from '@nestjs/common';
import { ClienteService } from './cliente.service';
import { Cliente } from './cliente.entity';

@Controller('clientes')
export class ClienteController {
  constructor(private readonly clienteService: ClienteService) {}

  @Get()
  findAll(): Promise<Cliente[]> {
    return this.clienteService.findAll();
  }

  @Post()
  create(@Body() cliente: Cliente): Promise<Cliente> {
    return this.clienteService.create(cliente);
  }

  @Delete(':id')
  remove(@Param('id') id: number): Promise<void> {
    return this.clienteService.remove(id);
  }
}
