import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FunilVendas } from './funil-vendas.entity';
import { FunilVendasService } from './funil-vendas.service';
import { FunilVendasController } from './funil-vendas.controller';

@Module({
  imports: [TypeOrmModule.forFeature([FunilVendas])],
  providers: [FunilVendasService],
  controllers: [FunilVendasController],
})
export class FunilVendasModule {}
