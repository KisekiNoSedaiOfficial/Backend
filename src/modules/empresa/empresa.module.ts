import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Empresa } from './empresa.entity';
import { EmpresaService } from './empresa.service';
import { EmpresaController } from './empresa.controller';
import { Cliente } from '../cliente/cliente.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Empresa, Cliente])],
  providers: [EmpresaService],
  controllers: [EmpresaController],
})
export class EmpresaModule {}
