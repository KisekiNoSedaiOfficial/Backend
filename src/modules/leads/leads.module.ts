import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Lead } from './leads.entity';
import { LeadService } from './leads.service';
import { LeadController } from './leads.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Lead])],
  providers: [LeadService],
  controllers: [LeadController],
})
export class LeadModule {}
