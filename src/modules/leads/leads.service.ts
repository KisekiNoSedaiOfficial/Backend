import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Lead } from './leads.entity';

@Injectable()
export class LeadService {
  constructor(
    @InjectRepository(Lead)
    private leadRepository: Repository<Lead>,
  ) {}

  findAll(): Promise<Lead[]> {
    return this.leadRepository.find({ relations: ['funilVendas'] });
  }

//   findOne(id: number): Promise<Lead> {
//     return this.leadRepository.findOne(id, { relations: ['funilVendas'] });
//   }

  create(lead: Lead): Promise<Lead> {
    return this.leadRepository.save(lead);
  }

  async remove(id: number): Promise<void> {
    await this.leadRepository.delete(id);
  }
}
