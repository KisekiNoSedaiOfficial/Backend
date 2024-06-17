import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ClienteModule } from './modules/cliente/cliente.module';
import { EmpresaModule } from './modules/empresa/empresa.module';
import { FunilVendasModule } from './modules/funil-vendas/funil-vendas.module';
import { LeadModule } from './modules/leads/leads.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: ':memory:',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
    ClienteModule,
    EmpresaModule,
    FunilVendasModule,
    LeadModule,
  ],
})
export class AppModule {}
