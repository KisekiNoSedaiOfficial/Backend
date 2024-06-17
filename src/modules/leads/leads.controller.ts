import { Controller, Get, Post, Param, Body, Delete } from '@nestjs/common';
import { LeadService } from './leads.service';
import { Lead } from './leads.entity';

@Controller('leads')
export class LeadController {
  constructor(private readonly leadService: LeadService) {}

  @Get()
  findAll(): Promise<Lead[]> {
    return this.leadService.findAll();
  }

//   @Get(':id')
//   findOne(@Param('id') id: number): Promise<Lead> {
//     return this.leadService.findOne(id);
//   }

  @Post()
  create(@Body() lead: Lead): Promise<Lead> {
    return this.leadService.create(lead);
  }

  @Delete(':id')
  remove(@Param('id') id: number): Promise<void> {
    return this.leadService.remove(id);
  }
}
